function rabin_karp(s, p) {
    let prime = 31;
    let m = 1000000007; // 10^9 + 7
    let p_pow = [1];
    for(let i = 1; i < s.length; i++) {
        p_pow[i] = (p_pow[i-1]*prime)%m;
    }
    let p_h = [0];
    for(let i = 0; i < s.length; i++) { // abcdab
        p_h[i+1] = (p_h[i] + (s.charCodeAt(i)*p_pow[i])%m)%m;
    }
    // p_h[3] = p_h[2] + s[3]*(prime^3)
    let hash_pat = 0;
    for(let i = 0; i < p.length; i++) {
        hash_pat = (hash_pat + (p.charCodeAt(i)*p_pow[i])%m)%m;
    }

    for(let i = 0; i <= s.length - p.length; i++) {
        let curr_substring_hash = (p_h[i+p.length] - p_h[i] + m)%m;
        if(curr_substring_hash == (hash_pat*p_pow[i])%m) {
            // manual match TODO

            let flag = true;
            for(let k = 0; k < p.length; k++) {
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
}

rabin_karp("aabbabcbbaabcab", "abc")