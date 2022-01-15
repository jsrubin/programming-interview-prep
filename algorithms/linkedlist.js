function Node(val) {
    this.val = val;
    this.next = null;
}

class LinkedList {
    constructor(array) {
        this.head = null;
        if (array && Array.isArray(array)) {
            let current = null;
            array.forEach((a) => {
                if (!this.head) {
                    this.head = new Node(a);
                    current = this.head;
                } else {
                    current.next = new Node(a);
                    current = current.next;
                }
            });
        }
    }

    size(node) {
        let count = 0;
        if (!node) {
            node = this.head;
        }
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    merge(l2) {
        let node = this.head;
        let newList = l2.head;
        const nodelen = size(node);
        console.log(nodelen);
        // const l2len = size(l2);
        let current = node;
        for (let i = 0; i < nodelen; i++) {
            if (current.val > newList.val) {
                // insert before
                let temp = current;
                current = new Node(newList.val);
                current.next = temp;
            }
            current = current.next;
            newList = newList.next;
        }
        return node;
    }
}

/*
    5 -> 8 -> 20 
    4 -> 11 -> 15
*/

const l1 = new LinkedList([5, 8, 20]);
const l2 = new LinkedList([4, 11, 15]);

console.log(JSON.stringify(l1.merge(l2)));
