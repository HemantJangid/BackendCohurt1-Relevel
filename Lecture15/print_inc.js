function f(n) {
    if(n == 1) {
        console.log(1);
        return;
    }
    console.log(n); // printing myself
    f(n-1); // please print the n-1 natural numbers for me
    
}

f(4)