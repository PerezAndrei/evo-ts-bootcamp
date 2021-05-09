interface ITest1<T> {
    insert(value: T): void;
}

interface ITest2<T> extends ITest1<T> {
    has(value: T): boolean;
}

class Test1 implements ITest1<number>{
    protected readonly numberArr: number[] = [];
    insert(value: number): void {
        console.log('Test1 insert');
        this.numberArr.push();
    }    
}

class Test2 extends Test1 implements ITest2<number>{
    has(value: number): boolean {
        return this.numberArr.includes(value);
    }

    insert(value: number): void {
        console.log('Test2 insert')
        this.numberArr.push(value);
    }
}

let test2 = new Test2();
test2.insert(1);