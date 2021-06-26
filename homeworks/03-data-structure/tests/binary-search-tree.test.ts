import { ITreeNode } from "../interfaces";
import { BinarySearchTree, TreeNode } from "../models";

describe.skip('binary search tree test', () => {

    describe.skip('test the constructor', () => {
        const treeNode: ITreeNode<number> = new TreeNode(1);
        const bst = new BinarySearchTree(treeNode);
        it('An initial tree node is defined after constructor is called', () => {
            expect(bst.treeNodeRoot).toEqual(treeNode);
        });
    });

    describe.skip('test the has function', () => {
        const treeNode: ITreeNode<number> = new TreeNode(1);
        const bst = new BinarySearchTree(treeNode);
        bst.insert(2)
            .insert(3)
            .insert(22)
            .insert(10);

        it('the has function returns false if there is no such element', () => {
            expect(bst.has(2)).toBe(true);
            expect(bst.has(22)).toBe(true);
            expect(bst.has(10)).toBe(true);
        });

        it('the has function returns true if there is such element', () => {
            expect(bst.has(21)).toBe(false);
            expect(bst.has(221)).toBe(false);
            expect(bst.has(101)).toBe(false);
        });
    });

    describe.skip('test the balance function', () => {
        const treeNode: ITreeNode<number> = new TreeNode(1);
        const bst = new BinarySearchTree(treeNode);
        bst.insert(10)
            .insert(9)
            .insert(8)
            .insert(7)
            .insert(6)
            .insert(5)
            .insert(4)
            .insert(3)
            .insert(2);

        it.todo('a tree should not be balanced if the balance function is not called', () => {
        });
    });
})