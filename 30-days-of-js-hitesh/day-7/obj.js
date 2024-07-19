let user1 = {
    name: 'Arun',
    age: 21,
    login() {
        console.log('Hi', this.name)
        console.log('User Logged In')
    },
    logOut() {
        console.log('User Logout')
    },
}

user1.login()
