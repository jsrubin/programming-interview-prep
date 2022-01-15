/*
    Input: root = [3,9,20,null,null,15,7]
    Output: 2
*/
const root1 = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};
/*
    Input: root = [2,null,3,null,4,null,5,null,6]
                  [2,null,3,null,4,null,5,null,6]
    Output: 5
*/
const root2 = {
  val: 2,
  left: null,
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: { val: 5, left: null, right: { val: 6, left: null, right: null } }
    }
  }
};

// [1, 2, 3, 4, 5]
const root3 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};

var minDepth = function (root, level = 0, minLevel = 0) {
  let min = minLevel;
  if (!root || Object.keys(root).length === 0) {
    return min;
  }
  level++;
  if (typeof root.val === "number" && !root.left && !root.right) {
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

console.log("5 = " + minDepth(root2)); // 5
console.log("0 = " + minDepth({})); // 0
console.log("2 = " + minDepth(root3)); // 2
console.log("2 = " + minDepth(root1)); // 2
console.log("1 = " + minDepth({ val: 0, left: null, right: null })); // 1
