// let str = ''
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < i; j++) {
//         str = str + '*'
//     }
//     str = str + '\n' // Lägg till en radbrytning
// }
// console.log(str)


// //Mellanslag mellan varje
// let str = ''
// for (let i = 0; i < 5; i++) {
//     str = str + ' *'
// }
// console.log(str)


// Upp och nedvänd triangel
let str = ''
for (let i = 10; i > 0; i-- ){
    for (let j = 0; j < i; j++) {
        str = str + '*'
    }
    str = str + '\n' // Lägg till en radbrytning
}
console.log(str)
