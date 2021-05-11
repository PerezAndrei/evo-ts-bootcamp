import { TreeTraverse } from "../enums";
import { assertNever } from "../helpers";
import { IBinaryTree, ITreeNode, IQueue, ITreeNodeHorDist, IBinarySearchTree } from "../interfaces";
import { Queue } from './Queue'

export class TreeNode<T> implements ITreeNode<T> {
    value: T;
    left?: ITreeNode<T>;
    right?: ITreeNode<T>;

    constructor(value: T) {
        this.value = value;
        this.left = this.right = undefined;
    }
}

export class BinaryTree<T> implements IBinaryTree<T>{
    treeNodeRoot: ITreeNode<T>;

    constructor(treeNode: ITreeNode<T>) {
        this.treeNodeRoot = { ...treeNode };
    }

    setTree(treeNode: ITreeNode<T>): this {
        this.treeNodeRoot = { ...treeNode };
        return this;
    }

    getColumn(columnOrder: number): T[] {
        const res: T[] = [];
        const treeNodeHorDist = new TreeNodeHorDist();
        this.calcHorizontalDistance(this.treeNodeRoot, treeNodeHorDist, 0);
        if (columnOrder < treeNodeHorDist.min || columnOrder > treeNodeHorDist.max) {
            throw new Error(`Column order: '${columnOrder}' should be greater or equal: '${treeNodeHorDist.min}' or less or equal: '${treeNodeHorDist.max}'`)
        }
        this.verticalTraverseByColumn(res, this.treeNodeRoot, columnOrder);
        return res;
    }

    insert(value: T): void {
        let treeNodeQueue: IQueue<TreeNode<T>> = new Queue<TreeNode<T>>();
        treeNodeQueue.enqueue(this.treeNodeRoot);

        while (!treeNodeQueue.empty) {
            const treeNode = treeNodeQueue.dequeue();

            if (!treeNode || treeNode.value === value) {
                return;
            }

            if (!treeNode.left) {
                treeNode.left = new TreeNode(value);
                break;
            }
            else {
                treeNodeQueue.enqueue(treeNode.left);
            }

            if (!treeNode.right) {
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
                this.levelOrderTraverse(values, [this.treeNodeRoot]);
                break;
            default:
                assertNever(traverse);
        }

        return values;
    }

    print(): void {
        this.printTree([this.treeNodeRoot]);
    }

    private inOrderTraverse: (values: T[], treeNode?: ITreeNode<T>) => void = (values, treeNode) => {
        if (!treeNode) {
            return;
        }

        this.inOrderTraverse(values, treeNode.left);
        values.push(treeNode.value);
        this.inOrderTraverse(values, treeNode.right);
    }

    private preOrderTraverse: (values: T[], treeNode?: ITreeNode<T>) => void = (values, treeNode) => {
        if (!treeNode) {
            return;
        }

        values.push(treeNode.value);
        this.preOrderTraverse(values, treeNode.left);
        this.preOrderTraverse(values, treeNode.right);
    }

    private postOrderTraverse: (values: T[], treeNode?: ITreeNode<T>) => void = (values, treeNode) => {
        if (!treeNode) {
            return;
        }

        this.postOrderTraverse(values, treeNode.left);
        this.postOrderTraverse(values, treeNode.right);
        values.push(treeNode.value);
    }

    private levelOrderTraverse(values: T[], treeNodes: ITreeNode<T>[]) {
        if (treeNodes.length) {
            const childs: ITreeNode<T>[] = [];
            const currentValues = treeNodes.filter(n => n?.value).map(n => n.value);
            currentValues.forEach(v => values.push(v));
            treeNodes.forEach(n => {
                if (!n) {
                    return;
                }
                n.left && childs.push(n.left);
                n.right && childs.push(n.right);
            });
            this.printTree(childs);
        }
    }

    private printTree(treeNodes: ITreeNode<T>[]) {
        if (treeNodes.length) {
            const childs: ITreeNode<T>[] = [];
            const values = treeNodes.map(n => n?.value ?? 'null');
            console.log(values.join(' - '));
            treeNodes.forEach(n => {
                if (!n) {
                    return;
                }
                n.left && childs.push(n.left);
                n.right && childs.push(n.right);
            });
            this.printTree(childs);
        }
    }

    private calcHorizontalDistance(
        treeNode: ITreeNode<T> | undefined,
        treeNodeHorDist: ITreeNodeHorDist,
        horDist: number
    ): void {
        if (!treeNode) {
            return;
        }

        if (horDist < treeNodeHorDist.min) {
            treeNodeHorDist.min = horDist;
        }

        if (horDist > treeNodeHorDist.max) {
            treeNodeHorDist.max = horDist;
        }

        this.calcHorizontalDistance(treeNode.left, treeNodeHorDist, horDist - 1);
        this.calcHorizontalDistance(treeNode.right, treeNodeHorDist, horDist + 1);
    }

    private verticalTraverseByColumn(
        values: T[],
        treeNode: ITreeNode<T> | undefined,
        columnOrder: number,
        currentColumnOrder: number = 0
    ): void {
        if (!treeNode) {
            return;
        }

        if (columnOrder === currentColumnOrder) {
            values.push(treeNode.value);
        }

        this.verticalTraverseByColumn(values, treeNode.left, columnOrder, currentColumnOrder - 1);
        this.verticalTraverseByColumn(values, treeNode.right, columnOrder, currentColumnOrder + 1);
    }
}

export class BinarySearchTree extends BinaryTree<number> implements IBinarySearchTree {
    private isBalanced: boolean = false;

    constructor(treeNode: ITreeNode<number>) {
        super(treeNode);
    }

    has(value: number): boolean {
        return this.exists(this.treeNodeRoot, value);
    }

    insert(value: number): void {
        this.insertValue(this.treeNodeRoot, value);
    }

    balance(): void {
        if (!this.isBalanced) {
            const values = this.traverse(TreeTraverse.InOrder);
            let treeNode = this.balanceTree(values, 0, values.length - 1);
            if (treeNode) {
                this.setTree(treeNode);
            }
            else {
                console.warn('Can not balance current tree');
            }
        }
    }

    private balanceTree(values: number[], start: number, end: number): ITreeNode<number> | undefined {
        if (start > end) {
            return undefined;
        }

        const mid = Math.floor((start + end) / 2);
        let treeNode: ITreeNode<number> = new TreeNode(values[mid]);
        treeNode.left = this.balanceTree(values, start, mid - 1);
        treeNode.right = this.balanceTree(values, mid + 1, end);

        return treeNode;
    }

    private insertValue(treeNode: ITreeNode<number> | undefined, value: number): ITreeNode<number> {
        if (!treeNode) {
            treeNode = new TreeNode<number>(value);

            if (this.isBalanced) {
                this.isBalanced = false;
            }
        }
        else if (value > treeNode.value) {
            treeNode.right = this.insertValue(treeNode.right, value);
        }
        else if (value < treeNode.value) {
            treeNode.left = this.insertValue(treeNode.left, value);
        }
        else {
            console.warn(`Value: '${value}' already exists in the tree!`);
        }

        return treeNode;
    }

    private exists(treeNode: ITreeNode<number> | undefined, value: number): boolean {
        if (!treeNode) {
            return false;
        }
        else if (treeNode.value === value) {
            return true;
        }
        else {
            return value < treeNode.value ?
                this.exists(treeNode.left, value) : this.exists(treeNode.right, value);
        }
    }
}

export class TreeNodeHorDist implements ITreeNodeHorDist {
    min: number = 0;
    max: number = 0;
}