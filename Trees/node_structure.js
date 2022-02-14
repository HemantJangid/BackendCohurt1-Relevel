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
class node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function preorder(root) {
    if(root == null) return;
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

function inorder(root) {
    if(root == null) return;
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

function postorder(root) {
    if(root == null) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
}

function height(root) {
    if(root == null) {
        // leaf node
        return -1;
    }
    let lh = height(root.left);
    let rh = height(root.right);
    return Math.max(lh, rh) + 1;
}

function max_element(root) {
    if(root == null) {
        // leaf node
        return Number.MIN_SAFE_INTEGER;
    }
    let lm = max_element(root.left);
    let rm = max_element(root.right);
    return Math.max(lm, rm, root.data);
}

function isMirror(a, b) {
    if(a == null && b == null) return true;
    if(a == null || b == null) return false;
    let isLeftMirror = isMirror(a.left, b.right);
    let isRightmirror = isMirror(a.right, b.left);
    return (a.data == b.data) && isLeftMirror && isRightmirror;
}

function levelOrder(root) {
    let qu = new Queue();
    qu.enqueue(root);
    while(!qu.isEmpty()) {
        let curr = qu.dequeue();
        console.log(curr.data);
        if(curr.left != null) {
            qu.enqueue(curr.left);
        }
        if(curr.right != null) {
            qu.enqueue(curr.right);
        }
    }
}

function levelOrderLevelWise(root) {
    let qu = new Queue();
    let null_node = new node(null);
    qu.enqueue(root);
    qu.enqueue(null_node);
    let result = "";
    while(!qu.isEmpty()) {
        let curr = qu.dequeue();
        if(curr.data == null) {
            // this is the end of the last level; 
            if(!qu.isEmpty()) {
                qu.enqueue(new node(null));
                result += "\n";
            }
        } else {
            result += (curr.data + " ");
        }
        if(curr.left != null) {
            qu.enqueue(curr.left);
        }
        if(curr.right != null) {
            qu.enqueue(curr.right);
        }
    }
    console.log(result);
}

function rightView(root) {
    let qu = new Queue();
    let null_node = new node(null);
    qu.enqueue(root);
    qu.enqueue(null_node);
    let result = [];
    while(!qu.isEmpty()) {
        let curr = qu.dequeue();
        if(curr.data == null) {
            // this is the end of the last level; 
            console.log(result[result.length - 1]); // last element
            if(!qu.isEmpty()) {
                qu.enqueue(new node(null));
                result = [];
            }
        } else {
            result.push(curr.data);
        }
        if(curr.left != null) {
            qu.enqueue(curr.left);
        }
        if(curr.right != null) {
            qu.enqueue(curr.right);
        }
    }
}

function rightViewOP1(root) {
    let qu = new Queue();
    let null_node = new node(null);
    qu.enqueue(root);
    qu.enqueue(null_node);
    let last_element = undefined;
    while(!qu.isEmpty()) {
        let curr = qu.dequeue();
        if(curr.data == null) {
            // this is the end of the last level; 
            console.log(last_element); // last element
            if(!qu.isEmpty()) {
                qu.enqueue(new node(null));
            }
        } else {
            last_element = curr.data;
        }
        if(curr.left != null) {
            qu.enqueue(curr.left);
        }
        if(curr.right != null) {
            qu.enqueue(curr.right);
        }
    }
}

let maxLevelVisited = -1;
function rightViewDFS(root, curr) {
    if(root == null) return;
    if(curr > maxLevelVisited) {
        console.log(root.data);
        maxLevelVisited = curr;
    }
    rightViewDFS(root.right, curr+1);
    rightViewDFS(root.left, curr+1);
}

let root = new node(10);
root.left = new node(20);
root.right = new node(30);
root.left.left = new node(40);
root.left.right = new node(50);
root.right.right = new node(60);
root.right.right.right = new node(70);
preorder(root);
console.log("*****");
inorder(root);
console.log("*****");
postorder(root);
console.log("*****");
console.log(height(root));
console.log(max_element(root));
console.log(isMirror(root, root));
levelOrderLevelWise(root);
console.log("****");
rightViewOP1(root);
console.log("***");
rightViewDFS(root, 0);