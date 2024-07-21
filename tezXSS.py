import aiohttp
import asyncio
from urllib.parse import urlparse, parse_qs, urlencode
import sys

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
    "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
    "Accept-Encoding": "gzip, deflate",
    "Accept": "*/*"
}

async def fetch(session, url):
    try:
        async with session.get(url, ssl=False, headers=HEADERS) as response:
            if 300 <= response.status < 400:
                return None, url
            if 'html' not in response.headers.get('Content-Type', ''):
                return None, url
            return await response.text(), url
    except Exception as e:
        return None, url

async def check_reflected(session, target_url):
    body, url = await fetch(session, target_url)
    if body is None:
        return [], url

    parsed_url = urlparse(target_url)
    reflected_params = [key for key, values in parse_qs(parsed_url.query).items() if any(value in body for value in values)]
    return reflected_params, url

async def check_append(session, target_url, param, suffix):
    try:
        parsed_url = urlparse(target_url)
        qs = parse_qs(parsed_url.query)
        if param not in qs:
            return False, url
        qs[param] = [qs[param][0] + suffix]
        new_url = parsed_url._replace(query=urlencode(qs, doseq=True)).geturl()
        reflected_params, _ = await check_reflected(session, new_url)
        return param in reflected_params, new_url
    except Exception as e:
        return False, url

async def worker_function(session, param_check, output_queue):
    reflected_params, url = await check_reflected(session, param_check['url'])
    for param in reflected_params:
        output_queue.append({'url': param_check['url'], 'param': param})

async def char_check_worker_function(session, param_check, output_queue):
    reflected, url = await check_append(session, param_check['url'], param_check['param'], "iy3j4h234hjb23234")
    if reflected:
        output_queue.append(param_check)

async def final_worker_function(session, param_check):
    for char in ['"', "'", "<", ">"]:
        reflected, url = await check_append(session, param_check['url'], param_check['param'], f"aprefix{char}asuffix")
        if reflected:
            print(f"param {param_check['param']} is reflected and allows {char} on {param_check['url']}")

async def make_pool(input_queue, worker_fn, max_workers=40, with_output=True):
    output_queue = []
    async with aiohttp.ClientSession() as session:
        tasks = []
        for param_check in input_queue:
            if with_output:
                tasks.append(worker_fn(session, param_check, output_queue))
            else:
                tasks.append(worker_fn(session, param_check))
        await asyncio.gather(*tasks)
    return output_queue

async def main():
    input_urls = [{'url': line.strip()} for line in sys.stdin]

    append_checks = await make_pool(input_urls, worker_function)
    char_checks = await make_pool(append_checks, char_check_worker_function)
    await make_pool(char_checks, final_worker_function, with_output=False)

if __name__ == "__main__":
    asyncio.run(main())
