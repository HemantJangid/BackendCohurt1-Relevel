let mat1 = [[1,2,3],[4,5,6],[7,8,9]];
let mat2 = [[1,1,1],[2,2,2],[1,1,1]];

function add(mat1, mat2) {
    let rows = mat1.length;
    let cols = mat1[0].length;
    let result = [];
    for(let i = 0; i < rows; i++) {
        result.push(Array(cols).fill(0));
    }
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            result[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return result;
}

console.log(add(mat1, mat2));