function merge(arr1, arr2) {
    let merged = [];
    let i = 0; // this will iterate on array arr1
    let j = 0; // this will iterate on array arr2
    let k = 0; // this will iterate on final result

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            merged[k] = arr1[i];
            i = i + 1;
            k = k + 1;
        } else {
            merged[k] = arr2[j];
            j = j + 1;
            k = k + 1;
        }
    }

    while(i < arr1.length) {
        merged[k] = arr1[i];
        i = i + 1;
        k = k + 1;
    }
    while(j < arr2.length) {
        merged[k] = arr2[j];
        j = j + 1;
        k = k + 1;
    }
    return merged;
}

let arr1 = [2,4,6,8];
let arr2 = [1,5,9,10,11];
console.log(merge(arr1, arr2));