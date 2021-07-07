const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) =>{
    
    res.writeHead(200, {'content-type':'text/html'})
    // let path = "./views/"
    // if(req.url === '/contact'){
    //     path += 'contact'
    // }else if(req.url === '/about'){
    //     path += 'about'
    // }
    // fs.readFile(path, (err, data) =>{
    //     if(err){
    //         console.error(err)
    //         return
    //     }
    //    res.end(data)
    // })
    if(req.url === '/contact') {
        fs.readFile('./contact.html', (err, data) =>{
            res.end(data)
        })
    }
    if(req.url === '/about') {
        fs.readFile('./contact.html', (err, data) =>{
            res.end(data)
        })
    }
    
})
server.listen(5000, () =>{
    console.log("server listening on port 5000")
})