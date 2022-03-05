class node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.key = data;
        this.height = 1; // if nodde is null then heigth is 0
    }
}

class AVL {
    constructor() {
        this.root = null;
    }
    getHeight(N) {
        if(N == null) return 0;
        return N.height;
    }
    getBalanceFactor(N) {
        if(N == null) return 0;
        return this.getHeight(N.left) - this.getHeight(N.right);
    }
    rotateRight(X) {
        let W = X.left;
        X.left = W.right;
        W.right = X;
        X.height = Math.max(this.getHeight(X.left), this.getHeight(X.right)) + 1;
        W.height = Math.max(this.getHeight(W.left), this.getHeight(W.right)) + 1;
        return W; // the new root;
    }
    rotateLeft(X) {
        let W = X.right;
        X.right = W.left;
        W.left = X;
        X.height = Math.max(this.getHeight(X.left), this.getHeight(X.right)) + 1;
        W.height = Math.max(this.getHeight(W.left), this.getHeight(W.right)) + 1;
        return W; // the new root;
    }

    insert_(key) {
        return this.insert(this.root, key);
    }
    insert(n, key) {
        
        if(n == null) return new node(key);
        if(key < n.key) {
            n.left = this.insert(n.left, key);
        } else {
            n.right = this.insert(n.right, key);
        }

        n.height = Math.max(this.getHeight(n.left), this.getHeight(n.right)) + 1;
        let bf = this.getBalanceFactor(n);
        //console.log(bf)
        if(bf > 1 && key < n.left.key) { // LL
            return this.rotateRight(n);
        }
        if(bf < -1 && key > n.right.key) { // RR
            return this.rotateLeft(n);
        }
        if(bf > 1 && key > n.left.key) { // LR
            n.left = this.rotateLeft(n);
            return this.rotateRight(n);
        }
        if(bf < -1 && key < n.right.key) { // LR
            n.right = this.rotateRight(n);
            return this.rotateLeft(n);
        }
        return n;
    }

    preorder(n) {
        if(n == null) return;
        console.log(n.key);
        this.preorder(n.left);
        this.preorder(n.right);
    }
    inorder(n) {
        if(n == null) return;
        this.inorder(n.left);
        console.log(n);
        this.inorder(n.right);
    }
}

let tree = new AVL();

tree.root = tree.insert_(50);
tree.root = tree.insert_(40);
tree.root = tree.insert_(30);
tree.root = tree.insert_(20);
tree.root = tree.insert_(10);

tree.preorder(tree.root);
console.log(tree.getHeight(tree.root))