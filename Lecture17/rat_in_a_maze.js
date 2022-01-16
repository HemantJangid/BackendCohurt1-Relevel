let n = 7;
let grid = [[0 ,0 ,1 ,0 ,0 ,1 ,0],
[1 ,0 ,1 ,1 ,0 ,0 ,0],
[0 ,0 ,0 ,0 ,1 ,0 ,1],
[1 ,0 ,1 ,0 ,0 ,0 ,0],
[1 ,0 ,1 ,1 ,0 ,1 ,0],
[1 ,0 ,0 ,0 ,0 ,1 ,0],
[1 ,1 ,1 ,1 ,0 ,0 ,0]];

let visited = [];
for(let i = 0; i < n; i++) {
    visited.push(Array(n).fill(false));
}

function f(x, y) {
    if(x < 0 || y < 0 || x >= n || y >= n){
        return 0; // we should not do it
    } // condition for outside the grid
    if(grid[x][y] == 1) {
        return 0; // we should not go here
    } // blocked cell
    if(visited[x][y] == true) {
        return 0; // we should not go on an already visited cell
    }
    if(x == n-1 && y == n-1) {
        return 1; // one possible way found
    }
    // x, y is safe to be moved on
    visited[x][y] = true;

    let up = f(x-1, y);
    let left = f(x, y-1);
    let down = f(x+1, y);
    let right = f(x, y+1);

    visited[x][y] = false; // may be x, y can be used by some other paths

    return up + left + down + right;

}

console.log(f(0, 0));

/*
[[0 ,0 ,1 ,0 ,0 ,1 ,0],
[1 ,0 ,1 ,1 ,0 ,0 ,0],
[0 ,0 ,0 ,0 ,1 ,0 ,1],
[1 ,0 ,1 ,0 ,0 ,0 ,0],
[1 ,0 ,1 ,1 ,0 ,1 ,0],
[1 ,0 ,0 ,0 ,0 ,1 ,0],
[1 ,1 ,1 ,1 ,0 ,0 ,0]]
*/
