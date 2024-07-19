function object() {
    let obj = {
        book: 'Harry Potter',
        Author: 'Rolling',
    }

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            value = exampleObj[key]
            console.log(key, value)
        }
    }
}
object()
