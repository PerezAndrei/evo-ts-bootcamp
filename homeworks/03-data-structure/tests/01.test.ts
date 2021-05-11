describe.skip('first test', () => {
    it('test sum fn', () => {
        expect(sum(1, 3)).toBe(4);
    });
    const obj1 = getObj();
    const obj2 = obj1;
    it('test to be', () => {
        expect(getObj()).not.toBe(getObj());
        expect(obj1).toBe(obj2);
    });

    it("test to equal", () => {
        expect(getObj()).toEqual(getObj());
        expect(obj1).toEqual(obj2);
    })
})

function sum(a: number, b: number): number {
    return a + b;
}

function getObj() {
    return { a: 1, b: 2 };
}

function getObj1() {
    return { a: 11, b: 22 };
}