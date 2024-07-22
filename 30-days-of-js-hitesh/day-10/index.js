const button = document.getElementById('myButton')
const text = document.getElementById('text')
// const form = document.getElementById('myForm')
const p = document.getElementById('para')
const input = document.getElementById('myinput')

// button.addEventListener('click', () => {
//     text.innerHTML = 'hello by new text!'
//     document.body.style.backgroundColor = 'yellow'
// })

// button.addEventListener('mouseover', () => {
//     text.innerHTML = 'hello by new text!'
// })

// text.addEventListener('mouseover', () => {
//     document.body.style.color = 'blue'
// })

// text.addEventListener('mouseout', (event) => {
//     document.body.style.color = 'black'
// })

// form.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e.target)
// })

input.addEventListener('input', (e) => {
    p.textContent = input.value
    e.preventDefault()
})
