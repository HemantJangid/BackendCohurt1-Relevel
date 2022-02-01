function counting_sort(arr) { // only for non negative elements // O(n+k)
    let n = arr.length;
    let maxEl = Math.max(...arr); // O(n)
    let output = Array(n);
    let freq = Array(maxEl+1).fill(0);

    // let's fill the frequency array
    for(let i = 0; i < n; i++) { // O(n)
        freq[arr[i]] += 1;
    }
    // create the prefix sum array of frequency array
    for(let i = 1; i < freq.length; i++) { // O(k)
        freq[i] = freq[i] + freq[i-1];
    }
    // fill the output array based on the correct index of last occurence of any element
    for(let i = 0; i < n; i++) { // O(n)
        let currElement = arr[i];
        output[freq[currElement] - 1] = arr[i];
        freq[currElement]-=1;
    }
    return output;
}

let arr = [1,4,3,2,1,1,2,3];
let sortedArray = counting_sort(arr);
console.log(sortedArray);
