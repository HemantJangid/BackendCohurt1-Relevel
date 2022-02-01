function maxSeriesOf1(arr) {
    let n = arr.length;
    let i = -1, j = 0;
    let ans = 0;
    while(j < n && i < n) {
        if(arr[j] == 1) {
            ans = Math.max(ans, j - i);
            j++;
        } else {
            i = j;
            j++;
        }
    }
    return ans;
}

let arr = [1,1,1,1,1, 0, 0, 0, 0];
console.log(maxSeriesOf1(arr));