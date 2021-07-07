const express = require('express')
const path = require('path')
const app = express();
const moment = require('moment')
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
// App level middlewares
//Use for things like login. can witre to 'log' to a file in form of history.
// To create error handling
//Use for modification of the request object.
//To stop 'cannot set header after headers have been sent', add 'return' keyword in your function.

const loggerMid = function(req, res, next){
    const time = 'Time: '+ moment().format('MMMM Do YYYY, h:mm:ss a');
    const path = req.path;
    console.log(`Log: ${time} - ${path}`);
    res.send(`Log: ${time} - ${path}`);
    next()
}
app.use(loggerMid)

app.get('/', (req, res, next) =>{
    res.send("Welcome to class");
    next()
})

//route level middleware. Only applicable to the route it is applied.
const isLoggedIn = (req, res, next)=>{
    const {login} = req.query;
    console.log(login)
    if(login === 'true'){
        next()
    }else{
    res.send("Not logged in user")
    }
}
app.get('./protected', isLoggedIn, (req, res)=>{
    res.send("This is a protected area")
})

//Error level middleware are created to handle errors. They are like route level middle.

app.listen(PORT, () =>{
    console.log(`Server started on http://127.0.0.1:${PORT}`)
})