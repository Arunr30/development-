let year = 2024

let givenYear =
    (year % 4 === 0 && year % 100 != 0) || year % 400 === 0
        ? 'Leap year'
        : 'Not an leap year'
console.log(givenYear)
