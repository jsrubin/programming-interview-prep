class Node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
      this.count = 0;
    };
  };

class BST {
    constructor() {
      this.root = null;
    }
    add(val) {
      const newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      };
      let current = this.root;
  
      const addSide = side => {
        if (!current[side]) {
          current[side] = newNode;
          return this;
        };
        current = current[side];
      };
  
      while (true) {
        if (val === current.val) {
          current.count++;
          return this;
        };
        if (val < current.val) addSide('left');
        else addSide('right');
      };
    };
  };
  
  function binarySearchTree() {
    this.root = null;
    this.add = (val) => {
      const newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      };
      let current = this.root;
  
      const addNode = side => {
        if (!current[side]) {
          current[side] = newNode;
          return this;
        };
        current = current[side];
      };
  
      while (true) {
        if (val === current.val) {
          return this;
        };
        if (val < current.val) addNode('left');
        else addNode('right');
      };
    }
    this.smallest = () => {
        let current = this.root;
        let found = 0;
        while (current && current.val) {
            if (current.left != null) {
                current = current.left;
            } else {
                found = current.val;
                current = null;
            }
        }
        return found;
    }
    this.largest = () => {
        let current = this.root;
        let found = 0;
        while (current && current.val) {
            if (current.right != null) {
                current = current.right;
            } else {
                found = current.val;
                current = null;
            }
        }
        return found;
    }
  }

//   let tree = new BST();
let tree = new binarySearchTree();
  tree.add(10);
  tree.add(4);
  tree.add(4);
  tree.add(12);
  tree.add(2);
  tree.add(72);
  tree.add(22);
  tree.add(40);
  tree.add(90); 
  console.log(tree);
  console.log(tree.val);
//   console.log(JSON.stringify(tree));
  console.log(tree.smallest());
  console.log(tree.largest());