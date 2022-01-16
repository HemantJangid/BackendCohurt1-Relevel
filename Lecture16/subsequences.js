function f(str, output) { // abc, ""
    if(str == "") {
        console.log(output);
        return;
    }
    let ch = str[0]; // a
    let restOfTheString = str.substring(1); // bc
    f(restOfTheString, output + ch);
    f(restOfTheString, output);
}

f("abc", "");