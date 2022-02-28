function lps_array(str) {
    let lps = [];
    lps[0] = 0;
    let len = 0;
    for(let i = 1; i < str.length; ) {
        if(str[len] === str[i]) {
            len+=1;
            lps[i] = len;
            i+=1;
        } else {
            if(len == 0) {
                lps[i] = 0;
                i+=1;
            } else {
                len = lps[len-1];
            }
        }
    }
    return lps;
}

function kmp(s, p) {
    let n = s.length;
    let m = p.length;
    let i = 0,  j = 0;
    let lps = lps_array(p);
    while(i < n && j < m) {
        if(s[i] == p[j]) {
            i++;
            j++;
        } else {
            if(j == 0) i++;
            else j = lps[j-1];
        }
    }
    if(j == m) return true;
    else return false;
}

console.log(kmp("aabbabcbbaabcab", "abd"))