const express = require('express')
const path = require('path')
const app = express();
const moment = require('moment')
const PORT = 5000;
app.use(express.json())

const Users = [
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

app.get('/users', (req, res)=>{
    res.json(Users)
})

app.post('/users',(req,res) =>{
    Users.push(req.body)
    res.json(Users);
    
})



app.listen(PORT, () =>{
    console.log(`Server started on http://127.0.0.1:${PORT}`)
})