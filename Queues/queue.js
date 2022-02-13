class Queue {
    constructor() {
        this.data = [];
        this.rear = 0;
        this.front = 0;
    }

    length() {
        return this.rear - this.front;
    }

    isEmpty() {
        return this.length() == 0;
    }

    enqueue(element) {
        this.data[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if(!this.isEmpty()) {
            let temp = this.data[this.front];
            this.front++;
            return temp;
        } else {
            return undefined;
        }
    }
    getFront() {
        if(!this.isEmpty()){
            return this.data[this.front];
        } else {
            return undefined;
        }
    }
}

function reverseQueue(queue) {
    let arr = [];
    while(queue.length() > 0) {
        arr.push(queue.dequeue());
    }
    for(let i = arr.length - 1; i >= 0; i--) {
        queue.enqueue(arr[i]);
    }
}

let qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);
qu.enqueue(50);
console.log(qu.getFront());
qu.dequeue();
qu.dequeue();
console.log(qu.getFront());

reverseQueue(qu);

console.log(qu.getFront());