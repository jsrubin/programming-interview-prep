class Tree {
    constructor(value, left, right) {
      this.value = value
      this.left = left
      this.right = right
    }
  }
  
  const breadthFirstTraversal = (tree, callback) => {
    if (tree == null) {
      return;
    }
  
    let queue = [tree]
//   console.log(queue)

    while (queue.length > 0) {
      let item = queue.shift()
    //   console.log(item)
      let value = item.value
      callback(value)
  
      if (item.left == null && item.right == null) {
        continue
      }
      if (item.left != null) {
        queue.push(item.left)
      }
      if (item.right != null) {
        queue.push(item.right)
      }
    }
  }
  
  t = new Tree(1,
        new Tree(2, 
            null, new Tree(4, null, new Tree(7, null, null))
        ), 
        new Tree(3, 
            new Tree(5, null, new Tree(8, null, new Tree(9, null, null))), 
            new Tree(6, null, null)
        )
        )
  
  breadthFirstTraversal(t, console.log)
  // Will print "1,2,3,4"