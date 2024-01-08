const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync("./content/subfolder/first.txt" , "utf8")
const second = readFileSync("./content/subfolder/second.txt" , "utf8") // file na thaakle no such file dekhabe

console.log(first, "\n", second) // pashapashi dekhabe

// writeFileSync("./content/subfolder/write.txt", `This is result: ${first}, ${second}`)

// I can even append to the file by setting up a flag

writeFileSync(
    "./content/subfolder/write.txt",
    "\nThis part has been appended later.", //appending pashapashi hoy. So, \n dile new line create kore
    {flag: "a"}
)