// der er 7 (3+2+2) primitive typer i Javescript
// Number, String, Boolean
// Undefined, Null
// Symbol og BigInt .. dem bruger vi ikke

// der er yderligere 2 typer
// object, function

function out(s) {console.log(s)}

function showTypes(list){
    console.log("STARTER udskrivening")
    for (const obj of list){
        console.log(obj + " er af typen=" + typeof obj)
    }
}

const a = 5.5
const b = 123
const  arr = []
arr.push(a)
arr.push(b)
arr.push(0/0)
showTypes(arr)
out(arr[0])
out(arr[1])
const arr2 = [1,2]
arr.push(arr2)
showTypes(arr)
let c
arr.push(c)
let g = null
arr.push(g)
showTypes(arr)
