/**
 * Flatten Binary Tree to Linked List
 * Given the root of a binary tree, flatten the tree into a "linked list"
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    // depth first traversal
    // let sum = currentSum;
    // let match = result;
    // if (!root || Object.keys(root).length === 0 || root.length === 0) {
    //     return false;
    // }

    // // add root.val to currentSum
    // sum = sum + root.value;

    // // if we hit a leaf then check against target
    // if (typeof root.value === 'number' && !root.left && !root.right) {
    //     return result ? result : targetSum === sum ? true : result;
    // }
    // if (root.left) {
    //     match = hasPathSum(root.left, targetSum, sum, match);
    // }
    // if (root.right) {
    //     match = hasPathSum(root.right, targetSum, sum, match);
    // }
    // return match;

    return;
};

/** Given a binary tree, find its minimum depth.
 * @param {TreeNode} root
 * @param {number} level
 * @param {number} minLevel
 * @return {number}
 */
const minDepth = (root, level = 0, minLevel = 0) => {
    let min = minLevel;
    if (!root || Object.keys(root).length === 0 || root.length === 0) {
        return min;
    }
    level++;
    if (typeof root.value === 'number' && !root.left && !root.right) {
        if (min === 0) {
            min = level;
        } else if (min > level) {
            min = level;
        }
    }
    if (root.left) {
        min = minDepth(root.left, level, min);
    }
    if (root.right) {
        min = minDepth(root.right, level, min);
    }
    return min;
};

/** Depth first traversal using recursion
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, currentSum = 0, result = false) {
    let sum = currentSum;
    let match = result;
    if (!root || Object.keys(root).length === 0 || root.length === 0) {
        return false;
    }

    // add root.val to currentSum
    sum = sum + root.value;

    // if we hit a leaf then check against target
    if (typeof root.value === 'number' && !root.left && !root.right) {
        return result ? result : targetSum === sum ? true : result;
    }
    if (root.left) {
        match = hasPathSum(root.left, targetSum, sum, match);
    }
    if (root.right) {
        match = hasPathSum(root.right, targetSum, sum, match);
    }
    return match;
};

/* 
class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
    this.count = 0;
  };
};
*/
// Function Declaration, named function, hoised and loaded before execution
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// Function Expression, unamed function, stored as variable, not hoised
const breadthFirstInsert = (tree, value, insert) => {
    if (tree == null) {
        return insert(value);
    }

    let queue = [tree];
    let done = false;

    // loop till we find null node
    while (queue.length > 0 && !done) {
        let item = queue.shift();
        let val = item && item.value;

        if (item == null) {
            item = insert(value);
            done = true;
            continue;
        }
        // keep searching, move on to next node
        if (val == null) {
            continue;
        }
        if (item.left == null) {
            item.left = insert(value);
            done = true;
            continue;
        } else if (item.right == null) {
            item.right = insert(value);
            done = true;
            continue;
        }
        if (item.left != null) {
            queue.push(item.left);
        }
        if (item.right != null) {
            queue.push(item.right);
        }
    }

    return tree;
};

//var array = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
const binarySearchTreeUnordered = (array) => {
    if (!array) {
        return null;
    }
    return array.reduce(
        (t, v) =>
            t ? breadthFirstInsert(t, v, (val) => new Node(val)) : new Node(v),
        null
    );
};

class BinarySearchTreeTraditional {
    constructor(init) {
        this.root = null;
        if (init && Array.isArray(init) && init.length > 0) {
            init.forEach((value) => {
                this.add(value);
            });
        }
    }

    add(val) {
        // traditional insert, lower value falls lefts, higher right, no duplicates
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;

        const addNode = (side) => {
            if (!current[side]) {
                current[side] = newNode;
                return this;
            }
            current = current[side];
        };

        while (true) {
            if (val === current.value) {
                return this;
            }
            if (val < current.value) addNode('left');
            else addNode('right');
        }
    }
    smallest() {
        let current = this.root;
        let found = 0;
        while (current && current.value) {
            if (current.left != null) {
                current = current.left;
            } else {
                found = current.value;
                current = null;
            }
        }
        return found;
    }
    largest() {
        let current = this.root;
        let found = 0;
        while (current && current.value) {
            if (current.right != null) {
                current = current.right;
            } else {
                found = current.value;
                current = null;
            }
        }
        return found;
    }
}

function addLargeIntegers(num1, num2) {
    let num1Len = num1.length;
    let num2Len = num2.length;

    if (num2Len > num1Len) {
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    let sum = '',
        carryDecimal = 0,
        a,
        b,
        temp,
        digitSum;
    for (let i = 0; i < num1.length; i++) {
        a = parseInt(num1.charAt(num1.length - 1 - i));
        b = parseInt(num2.charAt(num2.length - 1 - i));
        b = b ? b : 0;
        temp = (carryDecimal + a + b).toString();
        digitSum = temp.charAt(temp.length - 1);
        carryDecimal = parseInt(temp.substr(0, temp.length - 1));
        carryDecimal = carryDecimal ? carryDecimal : 0;

        sum = i === num1.length - 1 ? temp + sum : digitSum + sum;
    }

    return sum;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    this.head = null;

    if (
        !l1 ||
        (l1.val == 0 && typeof l1.next !== 'number') ||
        !l2 ||
        (l2.val == 0 && typeof l2.next !== 'number')
    ) {
        if (l1 && l1.val != 0) {
            return l1;
        } else if (l2 && l2.val != 0) {
            return l2;
        }
        return new ListNode([0]);
    }

    function read(head) {
        let data = [];
        let node = head;
        if (node && node.head) {
            node = node.head;
        }
        if (node && typeof node.data === 'number') {
            data.push(node.data);
        }
        if (!node) {
            return data;
        }
        while (node.next) {
            node = node.next;
            data.push(node.data);
        }
        return data;
    }

    function add(data) {
        let newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            // add new node to end of list
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
    }

    const set1 = read(l1).reverse().join('');
    const set2 = read(l2).reverse().join('');

    console.log(set1);
    console.log(set2);

    let newset = 0;
    newset = addLargeIntegers(set1.toString(), set2.toString());
    // if (set1.length > set2.length) {
    //     const newset2 = set2
    //         .toString()
    //         .padEnd(set1.toString().length - set2.toString().length, 0);
    //     newset = parseInt(set1) + parseInt(newset2);
    //     // const end1 = set1
    //     //     .toString()
    //     //     .slice(set1.length - set2.length, set1.length);
    //     // const start1 = set1.toString().slice(0, set1.length - set2.length);
    //     // console.log(`end1 ? ${end1}`);
    //     // console.log(`start1 ? ${start1}`);
    //     // newset = start1 + (parseInt(end1) + parseInt(set2)).toString();
    // } else if (set1.length < set2.length) {
    //     const newset2 = set1
    //         .toString()
    //         .padEnd(set2.toString().length - set1.toString().length, 0);
    //     newset = parseInt(set2) + parseInt(newset2);
    //     // const end1 = set2
    //     //     .toString()
    //     //     .slice(set2.length - set1.length, set2.length);
    //     // const start1 = set2.toString().slice(0, set2.length - set1.length);
    //     // newset = start1 + (parseInt(end1) + parseInt(set1)).toString();
    // } else {
    //     newset = parseInt(set1) + parseInt(set2);
    // }

    const result = Array.from(newset.toString()).map(Number).reverse();

    console.log(newset);
    console.log(result);

    result.forEach((d) => {
        add(d);
    });

    return this.head;
};

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null, array = []) {
        this.head = head;
        if (array && Array.isArray(array) && array.length > 0) {
            array.forEach((data) => {
                this.add(data);
            });
        }
    }

    read() {
        let data = [];
        let node = this.head;
        if (node && typeof node.data === 'number') {
            data.push(node.data);
        }
        while (node.next) {
            node = node.next;
            data.push(node.data);
        }
        return data;
    }

    add(data) {
        let newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            // add new node to end of list
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }
}

module.exports = {
    minDepth,
    hasPathSum,
    binarySearchTreeUnordered,
    BinarySearchTreeTraditional,
    flatten,
    LinkedList,
    ListNode,
    addTwoNumbers
};
