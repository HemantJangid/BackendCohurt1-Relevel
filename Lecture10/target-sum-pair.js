let arr = [1,2,3,8,16,22,34];
let target = 30;
let i = 0, j = arr.length - 1;

while(i < j) {
    if(arr[i] + arr[j] == target) {
        console.log(arr[i], arr[j]);
        break;
    } else if(arr[i] + arr[j] < target) {
        i = i+1;
    } else {
        j = j-1;
    }
}

