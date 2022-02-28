function string_matching(s, p) {
    let m = s.length;
    let n = p.length;
    for(let i = 0; i <= (m-n); i++) { // m-n is the last index from where we can make an n length substring in S
        let flag = true;
        for(let k = 0; k < n; k++) {
            if(s[i+k] != p[k]) {
                flag = false;
                break;
            }
        }
        if(flag) {
            console.log(i);
        }
    }
}

string_matching("aabbabcbbaabcab", "abc")