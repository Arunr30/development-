// // let user1 = {
// //     name: 'Arun',
// //     age: 21,
// //     login() {
// //         console.log('Hi', this.name)
// //         console.log('User Logged In')
// //     },
// //     logOut() {
// //         console.log('User Logout')
// //     },
// // }

// // user1.login()

// class Users {
//     static numberOfUsers = 0

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         Users.numberOfUsers++
//     }
//     login() {
//         console.log('Hi', this.name)
//         console.log('User Logged In')
//     }
//     static display() {
//         console.log('Total Users' + Users.numberOfUsers)
//     }
// }

// let userOne = new Users('Arun', 21)
// let user2 = new Users('vasu', 21)
// let user3 = new Users('Roman', 21)
// console.log(userOne.name)
// console.log(Users.display())
// console.log(Users.numberOfUsers)

// class PaidUser extends Users {
//     message() {
//         console.log('Hello Paid User')
//         return this
//     }
// }

// let paid = new PaidUser('Acchu', 26)

// // method chaining --> need to read.
// // paid.login().message()

class Temperature {
    constructor(temp) {
        this._temp = temp
    }
    get temp() {
        return `${this._temp} deg celcius`
    }

    set temp(temp) {
        if (temp > 100) {
            temp = 100
            this._temp = temp
        }
    }
}

let temp1 = new Temperature(25)
temp1.temp = 200
console.log(temp1.temp)
