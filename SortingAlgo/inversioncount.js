let counter = 0;
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
            // if(a1[i] > 2*a2[j]) // open this comment to make double inversion
                counter += (leftlength - i);
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

function countInversions(arr, start, end) {
    if(start >= end) return;
    let mid = parseInt((start+end)/2);
    countInversions(arr, start, mid); // count inversions in my left half
    countInversions(arr, mid + 1, end); // count inversions in my right half;
    merge(arr, start, mid, mid + 1, end); // count inversions that overlap in both left and right half
}


let arr = [0,1,2,3,4]; // length  =8 
countInversions(arr, 0, arr.length-1);
console.log(counter);