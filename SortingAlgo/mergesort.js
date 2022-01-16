function merge(arr, leftstart, leftend, rightstart, rightend) {
    let leftlength = leftend - leftstart + 1;
    let rightlength = rightend - rightstart + 1;
    let a1 = new Array(leftlength);
    let a2 = new Array(rightlength);

    for(let i = 0; i < leftlength; i++) { // i = 0,1,2,3
        a1[i] = arr[leftstart + i];
    }
    for(let i = 0; i < rightlength; i++) {// i = 0,1,2,3
        a2[i] = arr[rightstart + i];
    }
    //console.log(a1, a2);
    let i = 0; // this will iterate on array a1
    let j = 0; // this will iterate on array a2
    let k = leftstart; // this will iterate on given arr

    while(i < a1.length && j < a2.length) {
        if(a1[i] <= a2[j]) {
            arr[k] = a1[i];
            i = i + 1;
            k = k + 1;
        } else {
            arr[k] = a2[j];
            j = j + 1;
            k = k + 1;
        }
    }

    while(i < a1.length) {
        arr[k] = a1[i];
        i = i + 1;
        k = k + 1;
    }
    while(j < a2.length) {
        arr[k] = a2[j];
        j = j + 1;
        k = k + 1;
    }    
}

function mergesort(arr, start, end) {
    if(start >= end) return;
    let mid = parseInt((start+end)/2);
    mergesort(arr, start, mid); // go and recursively sort my left half
    mergesort(arr, mid + 1, end); // go and recursively sort my right half;
    merge(arr, start, mid, mid + 1, end);
}


let arr = [40,30,20,10,70,60,50,80]; // length  =8 
mergesort(arr, 0, arr.length-1);
console.log(arr);