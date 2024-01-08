// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only Share minimum)
const names = require('./part-4_1')
const sayHi = require('./part-4_2')

console.log(names)

sayHi("Tasin")
sayHi(names.john)
sayHi(names.peter)