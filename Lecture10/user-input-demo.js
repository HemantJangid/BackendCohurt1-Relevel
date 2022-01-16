let readline = require('readline');

let reader = readline.createInterface({
    input: process.stdin ,
    output: process.stdout
});

let x = reader.question('', function (ans) { // ans stores the input by user
    console.log("input by user is ", ans);
    ans += "singh";
    reader.close();
});

console.log(x);

