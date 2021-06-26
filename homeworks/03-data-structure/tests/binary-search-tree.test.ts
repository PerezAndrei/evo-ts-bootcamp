import { ITreeNode } from "../interfaces";
import { BinarySearchTree, TreeNode } from "../models";

describe.skip('binary search tree test', () => {

    describe.skip('test the constructor', () => {
        const treeNode = new TreeNode(1);
        const bst = new BinarySearchTree(treeNode);
        it('An initial tree node is defined after constructor is called', () => {
            expect(bst.treeNodeRoot).toEqual(treeNode);
        });
    });

    describe.skip('test the has function', () => {
        it.todo('the has function returns false if there is no such element');
        it.todo('the has function returns true if there is such element');
    });

    describe.skip('test the insert function', () => {
        it.todo('new value exists in a tree');
    });

    describe.skip('test the balance function', () => {
        it.todo('a tree should be balanced');
    });
})