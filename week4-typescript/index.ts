// const greeting = (person: string) => {
//     console.log("Good day " + person)
// }
//  greeting('Moses')

// interface User {
//     name: string;
//     id: number;
// }

// class UserAccount {
//     name: string;
//     id: number;

//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//     }
// }
// const user: User = new UserAccount("Ojiko", 1)

interface Moses {
    name: string;
    age: number;
    sayHi(): void;
}

class User  {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        return this.name + " " + this.age
    }
};
const ojiko: Moses = new User("Ojiko", 30)