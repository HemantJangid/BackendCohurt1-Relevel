function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let current_element = arr[i]; // this is the element to be inserted
        // we need to go to the left of this element till we find a smaller one
        let j = i-1;
        while(j >= 0 && arr[j] > current_element) {
            // till the time you either go beyond 0th index or you find a smaller element
            // we will do replacement
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = current_element;
    }
}

let arr = [5,4,3,2,1];
insertionSort(arr);
console.log(arr);