let pos = new Map();
 
function compare(a, b){    
    let n = Math.min(a.length, b.length);
    console.log(a);
    console.log(b);
 
    for(let i = 0; i < n; i++){
        console.log(pos.get(a.charAt(i)));
        console.log(pos.get(b.charAt(i)));
        if(pos.get(a.charAt(i)) < pos.get(b.charAt(i))){
 
            return false;
        }
 
        if(pos.get(a.charAt(i)) > pos.get(b.charAt(i))){
            return true;
        }
    }

    return b.length > a.length;
}
 
function main_(str, arr){
 
    for(let i = 0; i < str.length; i++){
        let ch = str.charAt(i);
        pos.set(ch, i);
    } 
 
    arr.sort(compare);
    return arr;
}
 
let str = "bacdefghijklmnopqrstuvwxyz";
let arr = ["aa", "ba"];
console.log(main_(str, arr));