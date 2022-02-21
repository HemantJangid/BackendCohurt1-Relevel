function sqrt(x) {
    if(x == 0 || x == 1) return x;
    if(x < 0) return NaN;

    let lo = 1;
    let hi = x-1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(mid*mid == x) return mid;
        if(mid*mid < x) {
            // it can be a possible answer otherwise a better ans can be to the right;
            ans = mid;
            lo = mid+1;
        } else {
            hi = mid - 1;
        }
    }
    return ans;
}

console.log(sqrt(50));