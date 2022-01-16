function issorted(arr, i) {
    if(i == arr.length-1) return true;
    let value = issorted(arr, i+1);
    return value && (arr[i] <= arr[i+1]);
}

let arr = [5,6,4,3,2];
console.log(issorted(arr, 0));
