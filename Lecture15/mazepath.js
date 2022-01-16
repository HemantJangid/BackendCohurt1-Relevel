function f(i , j, n, m) {
    if(i >= n || j >= m) return 0;
    if(i == n-1 && j == m-1) {
        return 1;
    }
    return f(i+1, j, n, m) + f(i, j+1, n, m);
}

console.log(f(0, 0, 3, 3));