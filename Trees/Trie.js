class TrieNode {
    constructor(value) {
        this.data = value;
        this.isEndOfWord = false;
        this.children = new Map();
    }
}

function insert(root, str) {
    let temp = root;
    for(let i = 0; i < str.length; i++) {
        let data = str[i];
        if(temp.children.get(data)) {
            temp = temp.children.get(data);
        } else {
            temp.children.set(data, new TrieNode(data));
            temp = temp.children.get(data);
        }
    }
    temp.isEndOfWord = true;
}


function search(root, str) {
    let temp = root;
    for(let i = 0; i < str.length; i++) {
        let data = str[i];
        if(temp.children.get(data)) {
            temp = temp.children.get(data);
        } else {
            return false;
        }
    }
    return temp.isEndOfWord == true;
}

let rootnode = new TrieNode('\0');
insert(rootnode, "bat");
insert(rootnode, "batman");
insert(rootnode, "super");
insert(rootnode, "superman");
insert(rootnode, "batgirl");
insert(rootnode, "wonder");
insert(rootnode, "woman");

console.log("ans for batgirl ", search(rootnode, "batgirl"));
console.log("ans for sup ", search(rootnode, "sup"));
console.log("ans for wow ", search(rootnode, "wow"));
console.log("ans for wonder ", search(rootnode, "wonder"));
