function string_hash(s) {
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
    console.log(p_h);
}
string_hash("abac") // caba
