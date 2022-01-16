const linearSearch = function search(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == target) return i;
    }
    return NaN;
}

// const binarySearch = function search() {

// }

// module.exports = {linearSearch}; // named export

module.exports = linearSearch; // default export

