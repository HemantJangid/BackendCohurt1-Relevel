function diffpair(arr, k) { // O(n)
    let n = arr.length;
    let i = 1;
    let j = 0;
    while(i < n && j < n) {
        let diff = arr[i] - arr[j];
        if(diff == k) {
            console.log(i, j);
            return true;
        } else if (diff < k) {
            i++;
        } else if(diff > k) {
            if(j+1 != i) {
                j++;
            } else {
                i++;
                j++;
            }
        }
    }
    return false;
}

let arr = [1,1,3,6,8,11];
let k = 4
console.log(diffpair(arr, k));