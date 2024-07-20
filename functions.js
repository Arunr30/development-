// performing the tasks again and again.
// we can call it anywhere, if we got any error whenever we can only fix it function body......
// terminologies --> function and methods, declaration and definition, arguments and parameters, higher order function and callbacks.

// function declaration.

// function printMe(param) {
//     console.log(param)
// }
// printMe('print')

//2. function expression.

// const fun = function () {
//     console.log('hoi')
// }

// returning a function.

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(2, 7))

// default parameters.

// function sum(a, b = 0) {
//     return a + b
// }

// console.log(sum(4))

// whenever we are not giving argument we get a default parameter as NaN --> not an number..... we can override through a parameter as a 0. inside the function parameter.

// rest parameters.

// ...y --> this is an rest parameter. function paramter should be a one parameter, and it must be a last parmater..

// function thing(x, ...y) {
//     console.log(x)
//     console.log(y)
// }
// console.log(thing(1, 2, 3, 4, 5, 6, 7, 8, 9)) // 1 --> assign to x and rest will be assign to y.

// arrow functions.

// const add = (a, b) => a + b

// let res = add(3, 5)
// console.log(res)

// nested functions.

// function outer() {
//     console.log('Outer')
//     function inner() {
//         console.log('Inner')
//     }
//     inner()
// }
// outer()

// global scope --> access can anywhere.
// inner scope --> access only inside the fucntion. these 2 rules is known as function scopes.!

// closures.

// nested function is a closure!

// function outer(x) {
//     function inner(y) {
//         return x + y
//     }
//     return inner
// }

// const outerFun = outer(10)

// console.log(outerFun(2))

// callback functions --> in javascript function is a first class citizen., a function passed as a argument in another fuction

// a function does not have name is called annonyms function.

// function night(dinner) {
//     dinner()
// }

// night(function () {
//     console.log('I ate My Fv Dinner')
// })

// function getCap(camera) {
//     camera()
// }

// getCap(() => {
//     console.log('canon')
// })

// function returnFunction() {
//     return function () {
//         console.log('returnning..')
//     }
// }

// const fn = returnFunction()

// fn()

// const salary = [1, 2, 3, 4]
// let res = salary.filter((s) => s > 2)
// console.log(res)

// revising terms.

// callbacks, pure and impure, hof,

;(function () {
    console.log('hi')
})()
