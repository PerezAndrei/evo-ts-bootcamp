import { IQueue } from "../interfaces";

export class Queue<T> implements IQueue<T>{
    private items: Array<T>;

    constructor(values?: T[]) {
        this.items = values ?? [];
    }

    enqueue(value: T): void {
        this.items.splice(0, 0, value);
    }

    dequeue(): T | undefined {
        let item = undefined;
        if (this.count) {
            item = this.items.pop();
        }
        return item;
    }

    peek(): T | undefined {
        let item = undefined;
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