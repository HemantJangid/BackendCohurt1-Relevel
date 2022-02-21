function binary_search(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === x) {
            return mid;
        } else if(arr[mid] < x) {
            start = mid+1;
        } else {
            end = mid - 1;
        }
    }
    return NaN;
}

let arr = [1,2,5,7,13,15,16,18,24,28,29];
let x = 18;
console.log(binary_search(arr, x))