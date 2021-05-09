export interface IQueue<T> {
    enqueue(value: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    empty: boolean;
    count: number;
}