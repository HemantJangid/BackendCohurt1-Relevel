class Hashtable {
    constructor() {
        this.loadFactor = 0;
        this.MAX_LOAD_FACTOR = 0.5;
        this.sizeOfHashtable = 2;
        this.noOfElements = 0;
        this.bucket = new Array(this.sizeOfHashtable);
    }

    hash(key) {
        let result = 0;
        let prime = 5381;
        for(let i = 0; i < key.length; i++) {
            result = (result + (key.charCodeAt(i)*prime)%this.sizeOfHashtable)%this.sizeOfHashtable;
            prime *= 5381;
        }
        return result;
    }
    rehash() {
        //console.log("rehashing", this.bucket);
        this.sizeOfHashtable*=2;
        let oldArray = this.bucket;
        this.bucket = new Array(this.sizeOfHashtable);
        this.noOfElements = 0;
        for(let i = 0; i < oldArray.length; i++) {
            if(oldArray[i] == undefined) continue;
            for(let j = 0; j < oldArray[i].length; j++) {
                this.insert(oldArray[i][j][0], oldArray[i][j][1]);
            }
        }
    }

    insert(key, value) {
        const bucket_index = this.hash(key);
        if(this.bucket[bucket_index] == undefined) {
            this.bucket[bucket_index] = [];
            this.bucket[bucket_index].push([key, value]);
        } else {
            for(let i = 0; i < this.bucket[bucket_index].length; i++) {
                if(this.bucket[bucket_index][i][0] == key) {
                    this.bucket[bucket_index][i][1] = value;
                    return;
                }
            }
            this.bucket[bucket_index].push([key, value]);
        }

        this.noOfElements+=1;
        this.loadFactor = this.noOfElements / this.sizeOfHashtable;
        if(this.loadFactor > this.MAX_LOAD_FACTOR) {
            this.rehash();
        }
        
    }

    search(key) {
        const bi = this.hash(key);
        if(this.bucket[bi] == undefined) return undefined;
        for(let i = 0; i < this.bucket[bi].length; i++) {
            if(this.bucket[bi][i][0] == key) {
                return this.bucket[bi][i][1];
            }
        }
    }

    remove(key) {
        // HW
    }

}

let ht = new Hashtable();
ht.insert("Sanket", "linkedin");
ht.insert("sanjeet", "ms");
ht.insert("bitto", "amazon");
ht.insert("vishwa", "linkedin");
ht.insert("Sanket", "google");
console.log(ht.search("riya"));