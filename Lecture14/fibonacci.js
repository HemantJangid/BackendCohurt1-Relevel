function binary(n, str) {
    if(n == 1) {
        console.log(str+"0");
        return;
    }
    if(n == 2) {
        console.log(str+"10");
        return;
    }
    return binary(n-1, str + "0") + binary(n-2, str + "10");
}

console.log(binary(3));