function upper_bound(arr, x) {
    let l = 0;
    let r = arr.length-1;
    let ans = -1;
    while(l <= r) {
        let mid = Math.floor((l+r)/2);
        if(arr[mid] > x) {
            ans = mid;
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    if(ans == -1) return arr.length;
    return ans;
}
function triangle(arr) {
    arr.sort(function cmp(a, b) {return a-b;});
    let n = arr.length;
    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n - 1; j++) {
            const sum_ = arr[i] + arr[j];
            ans += n - upper_bound(arr, sum_);
        }
    }
    return ans;
}

console.log(triangle([4,2,10]));