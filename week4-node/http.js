const http = require('http')
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end("<h1 style='color:purple; font-size:72;text-align:center'>Hello World!</h1>")
})
server.listen(port, hostname, () =>{
console.log(`Server listening at http://${hostname}:${port} `)
})

