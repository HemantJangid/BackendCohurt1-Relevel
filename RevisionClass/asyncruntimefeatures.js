console.log("start");

setTimeout(function() {
    for(let i = 0; i < 10000000000; i ++) {

    }
    console.log("executed set timeout");
}, 1000);

setTimeout(function() {
    
    console.log("executed set timeout 2");
}, 2000);

for(let i = 0; i < 10000000000; i ++) {

}

console.log("stop");