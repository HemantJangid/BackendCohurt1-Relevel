
// start denotes the index from where the unsorted region start
function findMinIndex(arr, start) {
    let min_idx = start; // we will assume that the first element of the unsorted region is the smalles one
    for(let i = start + 1; i < arr.length; i++) {
        if(arr[i] < arr[min_idx]) {
            // then we have found a new minimum ...
            min_idx = i; // 
        }
    }
    return min_idx;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let min_idx = findMinIndex(arr, i);
        if(i != min_idx) {
            let temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }
}

let arr = [5,2,6,7,2,1,0];

selectionSort(arr);

console.log(arr);
