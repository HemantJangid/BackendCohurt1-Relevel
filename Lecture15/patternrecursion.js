function f(r, c, n) {
    if(r > n) return;
    if(c > r) {
        process.stdin.write("\n");
        f(r+1, 1, n);
        return;
    } else {
        process.stdin.write("* ");
        f(r, c+1, n);
    }
}


f(1, 1, 2);