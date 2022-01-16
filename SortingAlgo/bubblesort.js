function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) { // because last element is already sorted
        let is_swapped = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                // if swapped atleast once set flag to true
                is_swapped = true;
            }
        }
        if(is_swapped == false) break;
    }
} 