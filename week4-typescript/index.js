// const greeting = (person: string) => {
//     console.log("Good day " + person)
// }
//  greeting('Moses')



var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHi = function () {
        return this.name + " " + this.age;
    };
    return User;
}());
;
var ojiko = new User("Ojiko", 30);
console.log(ojiko.sayHi())
