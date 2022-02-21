function lower_bound(arr, x) {
    let l = 0;
    let r = arr.length-1;
    let ans = -1;
    while(l <= r) {
        let mid = Math.floor((l+r)/2);
        if(arr[mid] >= x) {
            ans = mid;
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    if(ans == -1) return NaN;
    return ans;
}