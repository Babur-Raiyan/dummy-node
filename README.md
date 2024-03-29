Things about Node:
- no dom
- no window prompt
- has file system
- based on modules

## Part-1: CLI

1. make a js file
2. run it via terminal (e.g. node index.js)

## Part-2: Globals

1. There are globals, such as- console etc.

New stuff: __setInterval()__

> The <mark style="background-color: orange">setInterval()</mark> method calls a function at specified intervals (in milliseconds).

> The <mark style="background-color: orange">setInterval()</mark> method continues calling the function until clearInterval() is called, or the window is closed.

> 1 second = 1000 milliseconds.

## Part-3: Modules Setup

> Does all my application need to be in same file?
- > yes: We will run only 1 app
- >  no: Keeping all codes in a same file is kinda insane. So we will create multiple files and then we can export necessary stuffs to our main file.

## Part-4: First Module
- This part talks about exporting stuffs.
If i want to use something from a different file :

> lets say in _file1.js_ ->  I have a variable *names* that i want to use in _file2.js_.
>>So in file1.js we will do __module.exports= {variables seperated by comma}__
>> <br> Then in file2.js we will acquire it using __somename = require('./filepath')__<br> This will pack the exported variable in a dictionary which can be accesed by typing dictname.variablename

## Part-5: Alternative Syntax
<u> Export on the go: </u>
- module.export.items = ["item1", "item2"]
This will export the array directly as items


## Part-6: Mind Grenade
- If we have a file that invokes a functions, We don't even need to assign that file to a variable when doing require. It will work anyway
- *if we don't set the require in a variable it will take everything*
- It is like executing 1 file from another file
- We won't be able to use the values though as it is not assigned to a variable

# Built-in  Modules
- OS
- path
- http
- fs
<hr>

## Part-7: OS module

- We can use it to see many type of informations about the os and system

## Part-8: Path module
- used for manipulating paths

## Part-9: FS module (sync)
- file can be read with <mark> readFileSync() </mark>; first parameter is path and second param is encoding(just always give "utf-8")
- file can be written with <mark style="background-color: green"> writeFileSync() </mark>
- Strings can also be appended by doing:
>> writeFileSync(
    "./content/subfolder/write.txt",
    "\nThis part has been appended later.", 
    <mark>{flag: "a"}</mark>
)

## Part-10: FS module (async)

> we will get to it again later

## Part-11: async vs sync

> we will get to it again later

## Part-12: Http module
- this module handles servers and page request and responses.

## Part-13: npm
- node package manager
- a package is basically a folder that has some javascript codes
- package, dependencies and module mean the same thing
- npm doesn't have quality control
- so download only those that have a great number of downloads
- it has been downloaded when node was installed
- <a href="npmjs.com">npm website</a>
- to check npm verson: in terminal -> npm --v
- npm packages can be installed both locally and globally
    for local: npm i <packageName>
    for global: npm i -g <packageName>
- We will use mostly local installation

## Part-14: First Package


## Part-15: Share Code
- When we push to github we ignore the node_modules folder.
- But after someone else gets my repo and just runs npm install in their terminal it will install all necessary modules by reading the package.json file