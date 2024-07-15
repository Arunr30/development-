const prompt = require('prompt-sync')({ sigint: true })

let age = prompt('Enter you age: ')
if (age >= 18) {
    console.log('you can vote')
} else if (age < 18) {
    console.log('you cannot vote')
}
