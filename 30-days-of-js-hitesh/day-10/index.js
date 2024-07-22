const button = document.getElementById('button')
const text = document.getElementById('text')

button.addEventListener('click', () => {
    text.innerHTML = 'hello by new text!'
    document.body.style.backgroundColor = 'yellow'
})
