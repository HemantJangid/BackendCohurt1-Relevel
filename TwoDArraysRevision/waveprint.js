function wavePrint(mat) {
    let n = mat.length; // total rows
    let m = mat[0].length; // total cols
    let result = "";
    for(let col = 0; col < m; col++) {
        if(col % 2 == 0) {
            // even col
            for(let row = 0; row < n; row++) {
                result += mat[row][col] + " ";
            }
        } else {
            // odd col
            for(let row = n-1; row >= 0; row--) {
                result += mat[row][col] + " ";
            }
        }
    }
    return result;
}

let mat = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];

console.log(wavePrint(mat));