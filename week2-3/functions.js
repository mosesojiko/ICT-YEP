function addition (a, b){
    a = document.getElementById("add1").value;
    b = document.getElementById("add2").value;
      let result = Number(a) + Number(b);
 document.getElementById("ans").innerHTML = result;
 return result;
 }
 
addition(4,6);
addition(4,9);
addition(10,5);
addition(15,6);
//alert(result)

function foo(i){
    if(i < 0)
    return;
    //alert("Begin: " + i);
    foo(i - 1)
    //alert("End: " + i);
}
foo(3)
 let password = 12345;
 function checkPassword (input, password) {
    if(input === password) {
        return "Successfull";
     }else{
        return "Incorrect password";
     }

}
let response = checkPassword(1234, password)
 //alert(response)