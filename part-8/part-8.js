const path = require("path")

console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute) // this method can be really useful for using it it in different environments as different machines can have different dirnames.
