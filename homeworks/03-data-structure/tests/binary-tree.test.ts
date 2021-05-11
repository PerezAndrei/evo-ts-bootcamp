import { BinaryTree, TreeNode } from "../services";

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
        const obj = {};
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
        it.todo('new value exists in a tree');
    });

    describe.skip('test the traverse function', () => {
        it.todo('check an order if the traverse type is in-order');
        it.todo('check an order if the traverse type is pre-order');
        it.todo('check an order if the traverse type is post-order');
    });

    describe.skip('test the getColumn function', () => {

    });
})