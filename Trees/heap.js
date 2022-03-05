class heap {
    constructor() { // maxheap
        this.heap = [];
    }

    upheapify(idx) {
        if(idx == 0) return;
        while(idx > 0) {
            let parent = Math.floor((idx-1)/2);
            if(this.heap[parent] > this.heap[idx]) {
                // then stop here
                break;
            } else {
                let temp = this.heap[idx];
                this.heap[idx] = this.heap[parent];
                this.heap[parent] = temp;
            }
            idx = parent;
        }
    }
    downheapify(idx) {
        let largestIdx = idx;
        while(idx < this.heap.length) {
            let lc = 2*idx+1;
            let rc = 2*idx + 2;
            if(lc < this.heap.length && this.heap[lc] > this.heap[largestIdx]) {
                largestIdx = lc;
            }
            if(rc < this.heap.length && this.heap[rc] > this.heap[largestIdx]) {
                largestIdx = rc;
            }
            if(largestIdx == idx) break;
            let temp = this.heap[idx];
            this.heap[idx] = this.heap[largestIdx];
            this.heap[largestIdx] = temp;
            idx = largestIdx;
        }
    }
    insert(element) {
        this.heap.push(element);
        this.upheapify(this.heap.length-1);
    }
    getMax() {
        return this.heap[0];
    }
    pop() {
        // remocves the root of heap
        let temp = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap[this.heap.length-1] = temp;
        this.heap.pop();
        this.downheapify(0);
    }
    display() {
        console.log(this.heap);
    }

    
}

let hp = new heap();
hp.insert(10);
hp.insert(5);
hp.insert(9);
hp.insert(-2);
hp.insert(18);
hp.insert(4);
hp.insert(2);
hp.insert(8)

console.log(hp.getMax());
hp.display();
hp.pop();
console.log(hp.getMax());
hp.display();