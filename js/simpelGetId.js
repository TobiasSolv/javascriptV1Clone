function out(s){console.log(s)}
const fruits = ["æbler", "pærer", "bannaner", "juice"]

function myFunc1(item){
    const ptag= document.getElementById("demo")
    out(ptag)
    ptag.innerHTML += "<br>" + item
}

function myFunc2(item, index){
    const ptag= document.getElementById("demo")
    ptag.innerHTML += "<br>" + index + ":" + item
}

fruits.forEach(myFunc1)

/*
let a = 5
a += 10
out(a)
 */

