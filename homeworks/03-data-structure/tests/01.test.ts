describe('first test', () => {
    it('test sum fn', () => {
        expect(sum(1, 3)).toBe(4);
    })
})

function sum(a: number, b: number): number {
    return a + b;
}