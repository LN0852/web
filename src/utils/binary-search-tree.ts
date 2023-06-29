interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

function preOrderTraverse(node: ITreeNode | null) {
  if (node === null) return
  console.log(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}
function inOrderTraverse(node: ITreeNode | null) {
  if (node === null) return
  inOrderTraverse(node.left)
  // console.log(node.value)
  arrTree.push(node.value)
  inOrderTraverse(node.right)
}
function postOrderTraverse(node: ITreeNode | null) {
  if (node === null) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  console.log(node.value)
}
const arrTree: number[] = []
function getKthValue(node: ITreeNode, k: number): number | null {
  inOrderTraverse(node)
  return arrTree[k - 1] || null
}

const tree: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}
// preOrderTraverse(tree)
// inOrderTraverse(tree)
// postOrderTraverse(tree)
console.log(getKthValue(tree, 2))
