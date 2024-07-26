//  error handling

// try,catch,finally

class MyCustomError extends Error {
    constructor(message) {
        super(message)
        this.message = 'My error'
    }
}
try {
    throw new MyCustomError('Something Went Wrong')
} catch (error) {
    console.error(error.name + ':' + error.message)
}
