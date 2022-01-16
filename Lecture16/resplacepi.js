function f(str, i, output) {
    if(i == str.length - 1) {
        console.log(output + str[i]);
        return;
    }
    if(i >= str.length) {
        console.log(output);
        return;
    }

    if(str[i] == 'p' && str[i+1] == 'i') {
        f(str, i+2, output+"3.14");
    } else {
        f(str, i+1, output + str[i]);
    }
}

f("abpipippi3p", 0, "");