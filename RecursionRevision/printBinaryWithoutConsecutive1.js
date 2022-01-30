// function f(n, str) {
//     if(n == 0) {
//         console.log(str);
//         return;
//     }
//     f(n-1, str + "0");
//     if(n-2 >= 0)
//         f(n-2, str + "01");
// }

// f(3, "0");
// // f(3, "1");

function f(n, i, str) {
    if(i == n) {
        console.log(str);
        return;
    }
    if(i > n) return;
    ///console.log(n, i, str);
    if(str[str.length - 1] == '0') {
        f(n, i+1, str + '0');
        f(n, i+1, str + '1');
    }
    else if(str[str.length - 1] == '1') {
        // f(n, i+2, str + '01');
        f(n, i+1, str + '0');
    }
}

let n = 4;
f(n, 1, "0");
f(n, 1, "1");