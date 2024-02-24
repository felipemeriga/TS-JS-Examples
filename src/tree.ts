export class Leaf {
    public value: number
    public left: Leaf
    public right: Leaf


    public constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    public root: Leaf

    public constructor() {
        this.root = null
    }

    addToTree(value: number) {
        this.root = this.recursiveInsert(this.root, value)
    }

    recursiveInsert(node: Leaf, value: number): Leaf {
        if (node == null) {
            return new Leaf(value)
        }

        if (value < node.value) {
            node.left = this.recursiveInsert(node.left, value)
        } else {
            node.right = this.recursiveInsert(node.right, value)
        }

        return node
    }

    printTreeDFSPostOrder(node: Leaf) {
        if (node.left != null) {
            this.printTreeDFSPostOrder(node.left)
        }
        if (node.right != null) {
            this.printTreeDFSPostOrder(node.right)
        }

        console.log(node.value)
    }

    printTreeDFSInOrder(node: Leaf) {
        if (node.left != null) {
            this.printTreeDFSPostOrder(node.left)
        }
        console.log(node.value)
        if (node.right != null) {
            this.printTreeDFSPostOrder(node.right)
        }
    }

    printTreeDFSPreOrder(node: Leaf) {
        console.log(node.value)
        if (node.left != null) {
            this.printTreeDFSPostOrder(node.left)
        }
        if (node.right != null) {
            this.printTreeDFSPostOrder(node.right)
        }
    }
}

const createTree = () => {
    const tree = new Tree()
    tree.addToTree(5)
    tree.addToTree(4)
    tree.addToTree(3)
    tree.addToTree(6)

    tree.printTreeDFSInOrder(tree.root)
}

