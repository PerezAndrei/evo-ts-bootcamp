import { TreeTraverse } from "../enums";
import { BinaryTree, TreeNode } from "../models";
import { arrayEqualityByOrder } from '../services/TestService';

expect.extend({ arrayEqualityByOrder });

describe('binary tree test', () => {
    describe('test the constructor', () => {
        let treeNode = new TreeNode(5);
        let bt = new BinaryTree(treeNode);
        it('define tree node after constructor is called', () => {
            expect(bt.treeNodeRoot).toBeDefined();
        });

        it("a node passed to the constructor does not equal the BT's root node", () => {
            expect(treeNode).not.toBe(bt.treeNodeRoot);
        });

        it("initial state should be just one node with childs equal undefined", () => {
            expect(bt.treeNodeRoot.left).toBeUndefined();
            expect(bt.treeNodeRoot.right).toBeUndefined();
        });

        it("The BT's root node value equals the value of tree node passed to the constructor", () => {
            expect(bt.treeNodeRoot.value).toEqual(treeNode.value);
        });
    });

    describe('test the set tree function', () => {
        const value1 = 1;
        const value2 = 2;
        let treeNode1 = new TreeNode(value1);
        let treeNode2 = new TreeNode(value2);
        let bt1 = new BinaryTree(treeNode1);
        let bt2 = bt1.setTree(treeNode2);

        it('prev tree node is different then new one', () => {
            expect(bt2.treeNodeRoot).not.toBe(treeNode1);
            expect(bt2.treeNodeRoot.value).toEqual(value2);
        });

        it("the 'set tree' method returns this", () => {
            expect(bt2).toBe(bt1);
        });
    });

    describe.skip('test the insert function', () => {
        const value = 1;
        const newValue = 2;
        const treeNode = new TreeNode(value);
        const bt = new BinaryTree(treeNode);

        it('new value exists in a tree', () => {
            expect(bt.treeNodeRoot.left).toBeNull();
            expect(bt.treeNodeRoot.right).toBeNull();
            bt.insert(newValue);
            expect(bt.treeNodeRoot.left).not.toBeNull();
            expect(bt.treeNodeRoot.left?.value).toBe(newValue);
            bt.insert(newValue);
        });
    });

    describe.skip('test the traverse function', () => {
        const inOrderRes = [1, 2, 5, 1, 6, 3, 7];
        const preOrderRes = [1, 2, 4, 5, 3, 6, 7];
        const postOrderRes = [4, 5, 2, 6, 7, 3, 1];
        const value = 1;
        const treeNode = new TreeNode(value);
        const bt = new BinaryTree(treeNode);
        bt.insert(2)
            .insert(3)
            .insert(4)
            .insert(5)
            .insert(6)
            .insert(7);

        it('check an order if the traverse type is in-order', () => {
            expect(bt.traverse(TreeTraverse.InOrder)).arrayEqualityByOrder(inOrderRes);
        });

        it('check an order if the traverse type is pre-order', () => {
            expect(bt.traverse(TreeTraverse.PreOrder)).arrayEqualityByOrder(preOrderRes);
        });
        
        it('check an order if the traverse type is post-order', ()=>{
            expect(bt.traverse(TreeTraverse.PostOrder)).arrayEqualityByOrder(postOrderRes);
        });
    });

    describe.skip('test the getColumn function', () => {

    });
})