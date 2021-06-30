//write week4.txt in the same directory
// const fs = require('fs');

// fs.writeFile('week4.txt', 'I just wrote this', (err) => {
//     if(err) {
//         console.log(err)
//     }
//     return;
// })

// write to week 3
const fs = require('fs');

// fs.writeFile('../week2-3/week4.txt', 'I just wrote this', (err) => {
//     if(err) {
//         console.log(err)
//     }
//     return;
// })


const fileToRead = fs.readFile("../week2-3/week4.txt","utf8", (err, data) =>{
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
    return data
})

