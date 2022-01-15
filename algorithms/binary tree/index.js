/*
    Input: root = [3,9,20,null,null,15,7]
    Output: 2
*/
const root1 = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: {
    val: 3,
    left: null,
    right: null
  }
};

// [5,4,8,11,null,13,4,7,2,null,null,null,1]
const buildTree = (arr, obj = {}) => {
  // find leaf, add left, return, add right

  const len = arr.length;
  //   arr.forEach((node, i) => {
  if (len > 2) {
    if (typeof arr[0] === "number") {
      obj.val = arr[0];
      if (arr[1] === null) {
        obj.left = null;
      } else if (typeof arr[1] === "number") {
        obj.left = buildTree(arr.slice(1, arr.length));
      }
      if (arr[2] === null) {
        obj.right = null;
      } else if (typeof arr[2] === "number") {
        obj.right = buildTree(arr.slice(2, arr.length));
      }
    }
  }
  return obj;
};

// console.log(JSON.stringify(buildTree([1, 2, 3, 4, 5])));

var binary = {};
var arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]; //[8,5,10,3,6,12];

// output
// {"value":5,"left":{"value":4,"left":{"value":null,"right":{"value":4,"left":{"value":2,"left":{"value":1}}},"left":{"value":null,"left":{"value":null,"left":{"value":null}}}}},"right":{"value":8,"right":{"value":11,"right":{"value":13}},"left":{"value":7}}}
function makeBinary(binary, number) {
  if (binary.value === undefined) {
    binary.value = number;
  } else if (number > binary.value) {
    if (binary.right === undefined) {
      binary.right = { value: number };
    } else {
      binary.right = makeBinary(binary.right, number);
    }
  } else {
    if (binary.left === undefined) {
      binary.left = { value: number };
    } else {
      binary.left = makeBinary(binary.left, number);
    }
  }
  return binary;
}

// for (let i in arr) {
//   makeBinary(binary, arr[i]);
// }

// console.log(JSON.stringify(binary));

// function insertNode1(tree, value) {
//   var node = tree,
//     key;
//   while (node.value !== value) {
//     key = value < node.value ? "left" : "right";
//     if (!node[key]) {
//       node[key] = new Node(value);
//       break;
//     }
//     node = node[key];
//   }
//   return tree;
// }

// function insertNode(tree, value) {
//   var node = tree, updated = false
//     if (node.left === null) {
//       node.left = new Node(value);
//       updated = true;
//     } else if (node.right === null) {
//       node.right = new Node(value);
//       updated = true;
//     }
//   return [updated, tree];
// }

const breadthFirstInsert = (tree, value, insert) => {
  if (tree == null) {
    return insert(value);
  }

  let queue = [tree]
  let done = false;

  // loop till we find null node
  while (queue.length > 0 && !done) {
    let item = queue.shift()
    let val = item && item.value;

    if (item == null) {
      item = insert(value);
      done = true;
      continue
    }
    // keep searching, move on to next node
    if (val == null) {
      continue
    }
    if (item.left == null) {
      item.left = insert(value);
      done = true;
      continue
    } else if (item.right == null) {
      item.right = insert(value);
      done = true;
      continue
    }
    if (item.left != null) {
      queue.push(item.left)
    }
    if (item.right != null) {
      queue.push(item.right)
    }
  }

  return tree;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var array = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
var tree = array.reduce((t, v) => 
  (t ? breadthFirstInsert(t, v, val => new Node(val)) : new Node(v))
  , null);

  console.log('what is my tree?')
  console.log(tree, null, 2);
  console.log(JSON.stringify(tree));

// console.log(JSON.stringify(tree));

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, currentSum = 0, result = false) {
  let sum = currentSum;
  let match = result;
  if (!root || Object.keys(root).length === 0) {
    return targetSum === sum;
  }

  // add root.val to currentSum
  sum = sum + root.val;

  // if we hit a leaf then check against target
  if (typeof root.val === "number" && !root.left && !root.right) {
    return targetSum === sum ? true : result;
  }
  if (root.left) {
    match = hasPathSum(root.left, targetSum, sum, match);
  }
  if (root.right) {
    match = hasPathSum(root.right, targetSum, sum, match);
  }
  return match;
};

// console.log("true = " + hasPathSum(root1, 3)); // true
// console.log("true = " + hasPathSum(root1, 4)); // true
