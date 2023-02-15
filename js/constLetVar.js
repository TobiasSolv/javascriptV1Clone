// der er 3 JAvaScript keywords der bruges til tildeling af varibel

function out(s) {console.log(s)}

const a = 5
let b = 6
b = "hej"
var c = 5.5

out(b)

function testScope(){
    let a1 = "xjeg er lokal"
    var v1 = "jer var lokal"
    if (a1>v1) {
        let a2 = "a1 var større end v1"
        out(a2)
        if (3==3){
            let a3 = 3
            var v3 = 3.3
            out("3=3")
        }
        //out(a3) kan ikke ses her
        out(v3) // block scope virker ikke med var
    }
}

testScope()
//out(a2) function scope virker
//out(v1) function scope virker

