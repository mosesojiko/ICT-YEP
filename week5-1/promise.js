setTimeout(() =>{
    console.log("working")
  }, 3000);
console.log("ajax")
let getPromise = new Promise((resolve, reject) =>{
    if(resolve){
        setTimeout(() =>{
            console.log("working")
          }, 3000);
    }else{
        console.log("error")
    }
})

getPromise
.then((data) =>{})
.catch((err) => {})
  
