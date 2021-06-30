class Users  {
    constructor(email, name, login){
        this.email = email;
        this.name = name;
        this.login = login;
        this.loginMessage = function(){
            if(this.login === true){
                return `${this.name} has successfully logged-In`
            }
            else{
              return  "You need to log in first"
            }
        }
    }
}

const user = new Users("moses@yahoo.com", "Moses", false)
const moses = new Users("moses@yahoo.com", "Moses", true)
// console.log(user.loginMessage())
// console.log(moses.loginMessage())
