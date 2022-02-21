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
    if(ans == -1) return NaN;
    return ans;
}
function abcdef(arr) {
    let n = arr.length;
    let lhs = [];
    let rhs = [];
    for(let a = 0; a < n; a++) {
        for(let b = 0; b < n; b++) {
            for(let c = 0; c < n; c++) {
                lhs.push(arr[a]*arr[b] + arr[c]);
            }
        }
    }
    for(let d = 0; d < n; d++) {
        if(arr[d] == 0) continue;
        for(let e = 0; e < n; e++) {
            for(let f = 0; f < n; f++) {
                rhs.push(arr[d]*(arr[e] + arr[f]));
            }
        }
    }
    //console.log(lhs, rhs)
    rhs.sort(function cmp(a, b) {return a - b;});
    let ans = 0;
    console.log(lhs, rhs)
    for(let i = 0; i < lhs.length; i++) { //O(n^3)
        let lb = lower_bound(rhs, lhs[i]); // O(logn^3)
        let ub = upper_bound(rhs, lhs[i]);
        //console.log(lb, ub)
        ans += (ub - lb);
    }
    return ans;
}

console.log(abcdef([2,3]));
