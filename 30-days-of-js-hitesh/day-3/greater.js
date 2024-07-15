const promopt = require('prompt-sync')({ sigint: true })

const a = promopt('Enter a number1: ')
const b = promopt('Enter a number2: ')
const c = promopt('Enter a number3: ')

if (a > b) {
    console.log('a is greater')
} else if (b > a) {
    console.log('b is greater')
} else {
    console.log('c is greater')
}
