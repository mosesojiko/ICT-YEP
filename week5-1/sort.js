let arr = [4,12,8,16]

console.log(arr.sort()) // does not give accurate result

let sorted = arr.sort((a,b) => a-b) // correct way
console.log(sorted)