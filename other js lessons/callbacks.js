// callback = a function passed as an argument to another function

// it is popular because it makes sure that a function is not executed before a task is completed :D


// The standard Way to do so:


/* let total = sum(2,3)

displayconsole(total)


function sum(x, y) {
    let result = x + y
    return result
}

function displayconsole(output) {
    console.log(output)
}

function displayDOM(output) {
    document.getElementById("myLabel").textContent = output
} */


// Using a callback:

function sum(x, y, callBack1, callBack2) {
    let result = x + y
    callBack1(result)
    callBack2(result)
}

function displayConsole(output) {
    console.log(output)
}

function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output
}

sum(12, 49, displayDOM, displayConsole)