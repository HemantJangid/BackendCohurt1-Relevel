let n = 5;

let element = 1;
for(let row = 1; row <= n; row++) {
    let str = "";
    if(row % 2 == 0) {
        for(let col = 1; col <= row; col++) {
            str = element + " " + str;
            element = element + 1;
        }
    } else {
        for(let col = 1; col <= row; col++) {
            str = str + element + " ";
            element = element + 1;
        }
    }
    
    console.log(str);
}