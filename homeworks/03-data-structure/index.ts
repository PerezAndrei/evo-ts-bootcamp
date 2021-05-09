import { BinarySearchTree, BinaryTree, TreeNode } from "./models";

// const treeNode = new TreeNode(1);
// const tree = new BinaryTree(treeNode);
// tree.insert(1);
// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);
// tree.insert(6);
// tree.insert(7);
// tree.print();

const bstreeNode = new TreeNode(1);
const bstree = new BinarySearchTree(bstreeNode);
bstree.insert(1);
bstree.insert(1);
bstree.insert(2);
bstree.insert(3);
bstree.insert(4);
bstree.insert(5);
bstree.insert(6);
bstree.insert(7);
bstree.print();
bstree.balance();
bstree.print();