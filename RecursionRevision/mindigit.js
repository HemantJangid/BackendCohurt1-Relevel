
function minSteps(n) {
    if(n <= 9) return 1;
    let str = n + "";
    let noOfDigits = str.length;
    let ans = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < noOfDigits; i++) {
        let currDigit = str[i] - '0';
        if(currDigit == 0) continue;
        ans = Math.min(ans, minSteps(n - currDigit));
    }
    return 1 + ans;
}

console.log(minSteps(342));

// "342"
