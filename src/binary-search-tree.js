const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootThree = null
  }

  root() {
    return this.rootThree
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootThree) {
      this.rootThree = newNode;
      return;
    }

    let currentNode = this.rootThree;

    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return currentNode;
        }

        currentNode = currentNode.left;

      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return currentNode;
        }

        currentNode = currentNode.right;

      }
    }
  }

  has(data) {
    let current = this.rootThree;

    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right
      }
    }
    return false;
  }

  find(data) {
    let current = this.rootThree;

    while (current) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  remove(data) {
    this.rootThree = removeNode(this.rootThree, data);

    function removeNode(node, data) {
      if (!node) return;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;

      } else {

        if (!node.right && !node.left) return;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootThree) return;

    let node = this.rootThree
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootThree) return;

    let node = this.rootThree
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};