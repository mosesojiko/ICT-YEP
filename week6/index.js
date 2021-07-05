const express = require('express')
const path = require('path')
const app = express();

const PORT = 5000;

// app.get('/', (req, res) =>{
//     res.send('<h1>Hello Moses, backend dev</h1>')
// })

// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// })

// app.get('*', (req, res) =>{
    
//         res.sendFile(path.join(__dirname, "public", "error.html"));
    
// })
const users = [
    {
        "name" : "john",
        age: 20
    },
    {
        "name" : "Moses",
        age: 30
    }
]
//handling json

app.get('/json', (req, res)=>{
    res.json(users)
})



app.listen(PORT, () =>{
    console.log(`Server started on http://127.0.0.1:${PORT}`)
})