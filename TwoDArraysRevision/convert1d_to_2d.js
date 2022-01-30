let arr = [1,2,3,4];
let r = 2;
let c = 3;

function convert(arr, r, c) {
    let mat = [];
    for(let i = 0; i < r; i++) {
        mat.push(Array(c));
    }
    let ptr = 0;
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if(ptr < arr.length) {
                mat[i][j] = arr[ptr];
                ptr++;
            }   
        }
    }
    return mat;
}

console.log(convert(arr, r, c));