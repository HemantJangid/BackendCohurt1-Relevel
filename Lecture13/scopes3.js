var teacher = "sanket"; // global

function fun () {
    teacher = "pulkit"; // block
    console.log(teacher);
}


function gun() {
    teacher = "sumit"; // global
}

fun();
console.log(teacher);
gun();
console.log(teacher);