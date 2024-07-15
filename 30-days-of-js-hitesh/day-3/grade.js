let score = 90

switch (true) {
    case score > 80 && score < 100:
        console.log('A')
        break
    case score > 60 && score < 80:
        console.log('B')
        break
    case score > 40 && score < 60:
        console.log('C')
        break
    case score > 20 && score < 40:
        console.log('D')
        break
    default:
        console.log('F')
        break
}
