function fun() {
    for(let i = x; i >= 0; i = i - 2) {
        // few lines of code
    }
}
// O(n)
// x -> x-2 -> x-4 -> x-6 ...... 0 (steps : n/2) -> f(n) = n/2 -> g(n) = n 

// HW
function fun() {
    let j = 1;
    for(let i = 0; i < n; i = i + j) {
        j = j + 1
        // some piece of code
    }
}
// HW

function fun() {
   for(let j = 1; j <= n; j++) {
        for(let i = 0; i < n; i = i + j) {
            // some piece of code
        }
    }   
}

function fun() {
    for(let  i = n; i > 0; i = i / 2) {
        // some code
    }
}

function fun() {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // some code
        }
    }
}

// m + m + m ...... m -> O(nm)


function fun() {
    for(let i = 1; i*i <= n; i++) {
        // some code
    }
}

// 1 , 2, 3, 4, ...... k -> k steps k*k <= n -> k = sqrt(n)
// O(sqrt(n))


function fun() {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < 5000; j++) {
            // some code
        }
    }
}

// O(n)

function fun() {
    for(let i = 1; i < n; i = i*2) {
        // some code
    }
}

// 1 , 2, 4, 8, 16, .... 2^k (after k steps) -> 2^k >= n -> k = logn


function fun() {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            for(let k = 1; k < n; k = k*2) {
                // some code
            }
        }
    }
    
}