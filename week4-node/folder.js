const fs = require('fs');


// const myFolder = "../week4-node/daysOfTheWeek";
// try {
//     if(!fs.existsSync(myFolder)) {
//         fs.mkdirSync(myFolder)
//     }
// } catch(err){
//     console.error(err)
// }

// fs.writeFile("./daysOfTheWeek/text.txt", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday", (err) =>{
//     if(err) {
//         console.log(err)
//         return;
//     }
// })
//  fs.rename('../week4-node/daysOfTheWeek', "../week4-node/weekDays", (err) =>{
//      if(err) {
//          console.log(err)
//          return
//      }
//      console.log("Done")
//  })
 fs.rmdir('./daysOfTheweek', {recursive: true}, (err) =>{
     if(err) {
         throw err;
     }
     console.log("deleted")
 })