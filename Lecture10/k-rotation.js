function rotate(arr, start, end) {
    let i = start, j = end;
    while(i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i = i + 1;
        j = j - 1;
    }
}

let arr = [1,2,3,4,5];
let k = 3;


rotate(arr, 0, arr.length - 1); // reverse whole array
rotate(arr, 0, k-1); // reverse first k
rotate(arr, k, arr.length - 1); // reverse last n-k
console.log(arr);
