function one() {
    two();
}

function two() {
    two();
}

function three() {
    console.trace("call stack");
}

three();