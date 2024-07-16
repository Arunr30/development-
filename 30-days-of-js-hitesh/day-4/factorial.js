function fact(x) {
    if (x == 0 || x == 1) {
        return
    }
    let result = x
    do {
        result = result * (x - 1)
        x--
    } while (x > 1)
    return result
}
console.log(fact(5))
