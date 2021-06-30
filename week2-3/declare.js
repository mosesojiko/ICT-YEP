//alert(funDeclear("Moses"))

function funDeclear(myName){
    return myName
}

let funcExpression = function(){
   // alert("Ojiko");
}
funcExpression()

function greeting(name){
    //alert("Hello " + name)
}

function userInput(callback){
    let myName = "Moses Ojiko";
    callback(myName)
}
userInput(greeting)

let sum = (a, b) =>{
    return a + b
}
//alert(sum(45, 2))
let add = (a, b) => a+b;
//alert(add(40, 30))


// let users = ["John", "Ben", "Mary"]
// for(let user of users){
//     //alert(user)
// }

// let user = {
//     name: "John",
//     age: 30,
//     sayHi(){
//         //"this" is the current object
//         //alert(this.name) // john
//         //alert(user.name) // john
//     }
// };
// user.sayHi()

// alert("my_".length)
// let str = `Hello my name is ben`;
// alert(str[str.length-1]) // n
// alert(str[0]) // H

for(let char of "Hello"){
    //alert(char)
}
let d = "hello"
for(let i=0; i < d.length; i++ ){
    //alert(d[i])
}