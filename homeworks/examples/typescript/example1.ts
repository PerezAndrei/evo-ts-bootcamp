
interface MyObj {
    prop1: number;
    prop2?: string;

    call(): string;
}

const superVariable3 = {
    prop1: 246,
    noSuchProp: 777,
} as unknown as MyObj;
superVariable3.prop1;
//superVariable3.call();

console.log(superVariable3.prop1)
