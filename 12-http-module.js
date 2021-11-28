const http = require('http');

const server = http.createServer((req,res) => {
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our homepage!');
    }else if(req.url === '/about'){
        res.end('This is our history!');
    }else{
        res.end(`
            <h1>OOPS!</h1>
            <p>We can't seem to find the page you are looking for! </p>
            <a href="/">Back to home!</a>
        `);
    }
})

server.listen(5000);