const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  
    res.statusCode = 200;  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    res.setHeader('Content-Type', 'text/html'); 
    console.log(req.url);


    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> Atharva Here </h1> <p> Hey this is Atharva </p>');
    }
    else if(req.url == '/about'){
        res.end('<h1> About Atharva </h1> <p> This is my about section </p>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Not found </h1><p> This page is not found on the server</p>');
    }
});


server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});