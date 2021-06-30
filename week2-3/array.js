var animal = "Lion";
var animals = ["Sheep", "Goat", "Dog", "Cat"];
//animals.push(animal);
animals.unshift(animal);
//alert(animals.pop())
//alert(animals)

let arr = ["I", "Study", "JavaScript", "Right", "Now"]
arr.splice(1,1)
//alert(arr)

let ar = ['t', 'e', 's', 't']
//alert(ar.slice(1,3)) // e and s
//alert(ar.slice(-2))// s and t

let arry = [1,2];
//alert(arry.concat([3,4])) //1, 2, 3, 4
//let arrys = ['Bilbo', 'Gandalf', 'Nazgul'];
// animals.forEach((animal, index, array)=>{
//     alert(`${animal} can also speak?`)
// })


// let users = [
//     {id: 1, name: "John", age: 18},
//     {id: 2, name: "Pete", age: 44},
//     {id: 3, name: "Mary", age: 78}
// ]
// let user = users.find(item=> item.id == 1);
// alert(user.name)
//let someUsers = users.filter((item) => item.id < 3)
//alert(someUsers[0].name)

// let lengths = arrys.map(item => item.length)
// //alert(lengths)

// let arr2 = [4, 89, 32];
// // let calculate = arr2.map(item => item * 6)
// // alert(calculate)


let arr3 = [1,2,3,4,5,6]
//alert(arr3.reverse())
let myNames = 'Bilbo, Gandalf, Nazgul';
let arr4 = myNames.split(', ')
//arr4.forEach((myname) =>alert(` A message to ${myname}`))

 let arr5 = ['Bilbo', 'Gandalf', 'Nazgul'];
 let str = arr5.join('; ');
 let combine = arr5.join(",")
//  alert(str)
//  alert(combine)
// console.log(str)
// console.log(combine)
