import { BinaryTree, TreeNode } from "./models";

const treeNode = new TreeNode(1);
const tree = new BinaryTree(treeNode);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
//console.log(tree.treeNode);
tree.print();