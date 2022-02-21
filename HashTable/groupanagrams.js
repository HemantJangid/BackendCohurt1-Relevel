function group(arr) { // O(nklogk)
    let hm = {};
    for(let i = 0; i < arr.length; i++) {
        let sorted_perm = arr[i].split("").sort().join(""); 
        if(hm[sorted_perm] == undefined) {
            hm[sorted_perm] = [arr[i]];
        } else {
            hm[sorted_perm].push(arr[i]);
        }
    }
    return Object.values(hm);
}

console.log(group(["bat", "ate", "eat", "tan", "nat", "tea"]))