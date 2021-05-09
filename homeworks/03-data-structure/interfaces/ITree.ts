import { TreeTraverse } from "../enums";

export interface ITreeNode<T> {
    value: T;
    left?: ITreeNode<T>;
    right?: ITreeNode<T>;
}

export interface IBinaryTree<T> {
    treeNodeRoot: ITreeNode<T>;
    setTree(treeNode: ITreeNode<T>): this;
    getColumn(columnOrder: number): Array<T>;
    traverse(traverse: TreeTraverse): T[];
    insert(value: T): void;
    print(): void;
}



export interface ITreeNodeHorDist {
    min: number;
    max: number;
}

export interface IBinarySearchTree extends IBinaryTree<number> {
    has(value: number): boolean;
    balance(): void;
}