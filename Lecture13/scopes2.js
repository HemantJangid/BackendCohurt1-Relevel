"use strict";

var teacher = "Sanket Singh";
var t; // undefined
console.log(t);
function gun() {
    //var content = "akebfkjsbfr"
    function fun() {
        teacher = "Pulkit";
        content = "Javascript";
        console.log("Relevel");
    }
    fun();
}

// console.log(content); // global -> content will not get undefined
//console.log(content);
console.log(teacher);
