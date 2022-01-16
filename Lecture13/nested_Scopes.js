var teacher = "Sanket"; // global
function fun() {
    var teacher = "pulkit"; // fun
    function gun(question) {
        console.log(teacher, question); // teacher -> fun, question -> gun
    }
    gun("what do you teach ? ");
}

console.log(teacher); // global
fun();
// gun("??");
console.log(teacher); // global

