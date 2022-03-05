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

let sum_of_nodes = 0;
function greaterSumTree(root) {
    if(root == null) return;
    greaterSumTree(root.right);
    sum_of_nodes += root.data;
    root.data = sum_of_nodes;
    greaterSumTree(root.left);
}

let preorderIndex = 0;
function search(inorder, l, r, data) {
    for(let i = l; i <= r; i++) {
        if(inorder[i] == data) return i;
    }
}
function buildTree(preorder, inorder, l, r) {
    if(l > r) return null;
    let newNode = new node(preorder[preorderIndex]);
    preorderIndex++;
    let inorderIndex = search(inorder, l, r, newNode.data);
    newNode.left = buildTree(preorder, inorder, l, inorderIndex-1);
    newNode.right = buildTree(preorder, inorder, inorderIndex+1, r);
    return newNode;
}

function findPath(root, x, arr) {
   if(root==null) return false;
   arr.push(root.data);
   if(root.data == x) return true;
   if(findPath(root.left, x, arr) || findPath(root.right, x, arr)) {
       return true;
   }
   arr.pop();
   return false;
}

let lca_ans = null;
function lca(root, p, q) {
    if(root == null) return 0;
    let left = lca(root.left, p, q);
    let right = lca(root.right, p, q);
    let curr = (root.data == p || root.data == q);
    if(curr + left + right >= 2 && lca_ans == null) {
        lca_ans = root;
    } 
    return curr + left + right;
}

function is_bst(root) {
    if(root == null) {
        return {max: Number.MIN_SAFE_INTEGER, min: Number.MAX_SAFE_INTEGER, isBst: true};
    }

    let left = is_bst(root.left);
    let right = is_bst(root.right);

    if(left.isBst == true && right.isBst == true && root.data > left.max && root.data < right.min) {
        return {
            max: Math.max(left.max, right.max, root.data),
            min: Math.min(left.min, right.min, root.data),
            isBst: true
        }
    } else {
        return {
            max: Math.max(left.max, right.max, root.data),
            min: Math.min(left.min, right.min, root.data),
            isBst: false
        }
    }
}

function is_balanced(root) {
    if(root == null) return {height: 1, isBalanced: true};
    let left_res = is_balanced(root.left);
    let right_res = is_balanced(root.right);
    let myHeight = Math.max(left_res.height, right_res.height) + 1;
    if(left_res.isBalanced && right_res.isBalanced) {
        // check height diff
        let diff = left_res.height - right_res.height;
        if(diff == 0 || diff == 1 || difd == -1) {
            return {height: myHeight, isBalanced: true};
        } else {
            return {height: myHeight, isBalanced: false};
        }
    } else {
        return {height: myHeight, isBalanced: false};
    }
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
console.log("*******")
greaterSumTree(root);
preorder(root);
console.log("****");
let pre = [3,9,20,15,7];
let ino = [9,3,15,20,7];

let treenode = buildTree(pre, ino, 0, pre.length-1);
levelOrderLevelWise(treenode);
postorder(treenode);
let arr = [];
findPath(treenode, 15, arr);

lca(treenode, 9, 15);
console.log("lca is", lca_ans.data);

console.log(is_bst(treenode));