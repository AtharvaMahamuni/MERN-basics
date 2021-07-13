const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    res.statusCode = 200;  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    res.setHeader('Content-Type', 'text/html'); 
    res.end('<h1> Atharva Here </h1> <p> Hey this is Atharva </p>');
});


server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});