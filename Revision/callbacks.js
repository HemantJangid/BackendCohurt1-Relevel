function fun(cb, time) {
    setTimeout(() => {
        cb();
        cb();
        }, time);
}

function gun(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(12);
        }, time);
    });
}

function myFun() {
    console.log("yoyoyoyoyo");
}

// fun(myFun, 3000);

let x = gun(3000); // it will return a placeholder in x which has a value property

x.then(function (p) {
    console.log("value is ", p);
})

