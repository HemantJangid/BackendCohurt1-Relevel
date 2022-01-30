// for(var i = 1; i <= 3; i++) { // i -> global
//     setTimeout(function exec() {
//         console.log(i); // i -> global
//     }, i*1000); // global
// }
// "use strict";

for(let i = 1; i <= 3; i++) { // i -> block of for
    setTimeout(function exec() {
        console.log(i); // i -> block
    }, i*1000); // block
    fun(); // global
    // console.log(y*10); // error
    y = 10; // auto global
}


function fun() {
    console.log("yoyo fun");
}

arr.forEach(function() {
    
})