const prompt = require('prompt-sync')({ sigint: true })

let num = prompt('Please Enter a number')

if (num > 0) {
    console.log('Positive')
} else if (num < 0) {
    console.log('Negative')
} else {
    console.log('Zero')
}
