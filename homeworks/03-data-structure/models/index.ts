import { TreeTraverse } from "../enums";
import { assertNever } from "../helpers";
import { IBinaryTree, ITreeNode, IQueue } from "../interfaces";

export class TreeNode<T> implements ITreeNode<T> {
    value: T;
    left: ITreeNode<T>;
    right: ITreeNode<T>;

    constructor(value: T) {
        this.value = value;
        this.left = this.right = null;
    }
}

export class BinaryTree<T> implements IBinaryTree<T>{
    treeNodeRoot;

    constructor(treeNode: ITreeNode<T>) {
        this.treeNodeRoot = treeNode;
    }

    setTree(treeNode: ITreeNode<T>): this {
        this.treeNodeRoot = treeNode;
        return this;
    }

    getColumn(columnOrder: number): T[] {
        throw new Error("Method not implemented.");
    }

    insert(value: T): void {
        let treeNodeQueue: IQueue<TreeNode<T>> = new Queue();
        treeNodeQueue.enqueue(this.treeNodeRoot);

        while (!treeNodeQueue.empty) {
            console.log('while');
            const treeNode = treeNodeQueue.dequeue();

            if (treeNode.left === null) {
                treeNode.left = new TreeNode(value);
                break;
            }
            else {
                treeNodeQueue.enqueue(treeNode.left);
            }

            if (treeNode.right === null) {
                treeNode.right = new TreeNode(value);
                break;
            }
            else {
                treeNodeQueue.enqueue(treeNode.right);
            }
        }
    }

    traverse(traverse: TreeTraverse): T[] {
        const values: T[] = [];

        switch (traverse) {
            case TreeTraverse.InOrder:
                this.inOrderTraverse(values, this.treeNodeRoot);
                break;
            case TreeTraverse.PreOrder:
                this.preOrderTraverse(values, this.treeNodeRoot);
                break;
            case TreeTraverse.PostOrder:
                this.postOrderTraverse(values, this.treeNodeRoot);
                break;
            case TreeTraverse.LevelOrder:
                break;
            default:
                assertNever(traverse);

        }

        return values;
    }

    private inOrderTraverse: (values: T[], treeNode: ITreeNode<T>) => void = (values, treeNode) => {
        if (treeNode === null) {
            return;
        }

        this.postOrderTraverse(values, treeNode.left);
        values.push(treeNode.value);
        this.postOrderTraverse(values, treeNode.right);       
    }

    private preOrderTraverse: (values: T[], treeNode: ITreeNode<T>) => void = (values, treeNode) => {
        if (treeNode === null) {
            return;
        }

        values.push(treeNode.value);
        this.postOrderTraverse(values, treeNode.left);        
        this.postOrderTraverse(values, treeNode.right);       
    }

    private postOrderTraverse: (values: T[], treeNode: ITreeNode<T>) => void = (values, treeNode) => {
        if (treeNode === null) {
            return;
        }

        this.postOrderTraverse(values, treeNode.left);
        this.postOrderTraverse(values, treeNode.right);
        values.push(treeNode.value);
    }

    print(): void {
        this.printTree([this.treeNodeRoot]);
    }

    private printTree(treeNodes: ITreeNode<T>[]) {
        if (treeNodes.length) {
            const childs: ITreeNode<T>[] = [];
            const values = treeNodes.map(n => n?.value ?? 'null');
            console.log(values.join(' - '));
            treeNodes.forEach(n => {
                if (n == null) {
                    return;
                }
                childs.push(n.left);
                childs.push(n.right);
            });
            this.printTree(childs);
        }
    }
}

export class Queue<T> implements IQueue<T>{
    private items: Array<T>;

    constructor(values?: T[]) {
        this.items = values ?? [];
    }

    enqueue(value: T): void {
        this.items.splice(0, 0, value);
    }

    dequeue(): T {
        let item: T = null;
        if (this.count) {
            item = this.items.pop();
        }
        return item;
    }

    peek(): T {
        let item: T = null;
        if (this.count) {
            item = this.items[0];
        }
        return item;
    }

    get count(): number {
        return this.items.length;
    }

    get empty(): boolean {
        return this.items.length === 0;
    }
}