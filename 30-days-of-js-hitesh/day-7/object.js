class Library {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    book() {
        return (
            'The Author is' +
            this.author +
            'Published Year is' +
            this.year +
            'And the year is' +
            this.year
        )
    }
}

let lib = new Library('The Subtle Art of not Givinf F', 'Mark Manson', 2020)

let lib2 = new Library('CTC', 'Gayle', 2002)

// console.log(lib.author)
// console.log(lib.title)
// console.log(lib.year)

console.log(lib2.book())
