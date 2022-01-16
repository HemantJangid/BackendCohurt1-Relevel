function wecanplace(row, col, n, visited) { // can we place a new queen on row, col cell
    // check the col
    for(let i = row - 1; i >= 0; i--) {
        if(visited[i][col] == true) return false;
    }
    // check backward diag
    for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if(visited[i][j] == true) return false;
    }
    // check forward diag
    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if(visited[i][j] == true) return false;
    }
    return true;
}

function nqueen(row, n, visited) {
    if(row == n) {
        return 1; // found one possible config
    }

    let result = 0;
    for(let col = 0; col < n; col++) {
        if(wecanplace(row, col, n, visited)) {
            visited[row][col] = true;
            result += nqueen(row+1, n, visited);
            visited[row][col] = false;
        }
    }
    return result;
}

let visited = [[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false], [false, false, false, false, false]];
let n = 5;
console.log(nqueen(0, 5, visited));