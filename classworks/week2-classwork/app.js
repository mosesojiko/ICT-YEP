
// first task
let admin;
let newName;
 newName = "John";
admin = newName;
alert(admin)

//second task
function areaOfTriangle(height, base) {
    
    let area = (height * base)/2;
    return area;
}
alert(areaOfTriangle(7, 3.5))

//Third task
function withdraw(balance, amount) {
    if(amount > balance){
        return "Insufficient balance";
    }else{
        return "Transaction Successful"
    }
}
alert(withdraw(7000, 10000));

//Fourth task
//Derclare an array with members 1-20
// write a loop that add all the members of the array and return the sum
let arrOf20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let sum = 0;
for(let a=0; a < arrOf20.length; a++){
    sum += arrOf20[a]
}
alert(sum)