let count = 0

function increamnet() {
    count++
    updateCounter()
}
function decrement() {
    if (count > 0) {
        count--
        updateCounter()
    }
}

function updateCounter() {
    document.getElementById('counter').innerText = count
}
