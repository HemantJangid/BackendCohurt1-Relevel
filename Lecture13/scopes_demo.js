let y = 10; // global scope

function fun() {
    let x = 10;
    console.log(y);
}

if(true) { 
    let y = 10;
    console.log(y);

}

for(let i = 0; i < 10; i++) {
    let j = 10;
    console.log(y);

}