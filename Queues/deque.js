class Deque {
    constructor() {
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }
    isEmpty() {
        return (this.rear - this.front) == 0;
    }
    addBack(element) {
        this.data[this.rear] = element;
        this.rear++;
    }
    addFront(element) {
        if(this.isEmpty()) {
            this.addBack(element);
        }
        if(this.front == 0) {
            let arr = new Array(2*(this.rear - this.front));
            let i = arr.length-1;
            let j = this.rear-1;
            while(j >= this.front) {
                arr[i] = this.data[j];
                i--;
                j--;
            }
            this.front = i;
            this.rear = arr.length;
            this.data = arr;
            this.data[this.front] = element;

        } else {
            this.front--;
            this.data[this.front] = element;
        }
    }
    removeFront() {
        if(!this.isEmpty()) {

            let temp = this.data[this.front];
            this.front++;
            return temp;
        } else {
            return undefined;
        }
    }
    removeBack() {
        if(!this.isEmpty()) {
            let temp = this.data[this.rear-1];
            this.rear--;
            return temp;
        } else {
            return undefined;
        }
    }
    getFront() {
        if(!this.isEmpty()) {
            return this.data[this.front];
        } else {
            return undefined;
        }
    }
}

let dq = new Deque();
dq.addBack(10);
dq.addBack(20);
dq.addFront(30);
console.log(dq.getFront());
dq.removeBack();
dq.removeFront();
console.log(dq.getFront());
dq.addFront(100);
dq.addFront(200);
dq.addFront(300);
console.log(dq.getFront());