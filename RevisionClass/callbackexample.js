function fun(cb) {
    for(let i = 0 ; i < 1000; i++) {
        console.log(i);
    }
    cb();
    cb();
}

function funPromise() {
    return new Promise((resolve, reject) => {
        for(let i = 0 ; i < 1000; i++) {
            console.log(i);
        }
        resolve("sanket");
    });
}

// fun(function() {console.log("do fun")});

async function execute() {
    let x = await funPromise();
    console.log("do fun", x);
}

execute();