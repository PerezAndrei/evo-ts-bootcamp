import { mergeSort } from "../services";
import { CompareFunction } from "../types";

describe('test  merge sort', () => {
    it('test the sort by asc function with a number array', () => {
        const compareFunctionAsc: CompareFunction<number> = (a, b) => {
            return a - b;
        }
        const actualSet = [5, 4, 3, 7, 8, 7, 8, 1];
        const expectedSetAsc = [1, 3, 4, 5, 7, 7, 8, 8];

        expect(mergeSort(actualSet, compareFunctionAsc)).toEqual(expectedSetAsc);
    });

    it('test the sort by desc function with a number array', () => {
        const compareFunctionDesc: CompareFunction<number> = (a, b) => {
            return b - a;
        }
        const actualSet = [5, 4, 3, 7, 8, 7, 8, 1];
        const expectedSetDesc = [8, 8, 7, 7, 5, 4, 3, 1];

        expect(mergeSort(actualSet, compareFunctionDesc)).toEqual(expectedSetDesc);
    });

    it('test the sort by asc function with a string array', () => {
        const compareFunctionAsc: CompareFunction<string> = (a, b) => {
            return a.length - b.length;
        }
        const actualSet = ['1', '333', '22', '55555', '4444'];
        const expectedSetAsc = ['1', '22', '333', '4444', '55555'];

        expect(mergeSort(actualSet, compareFunctionAsc)).toEqual(expectedSetAsc);
    });

    it('test the sort by desc function with a string array', () => {
        const compareFunctionDesc: CompareFunction<string> = (a, b) => {
            return b.length - a.length;
        }
        const actualSet = ['1', '333', '22', '55555', '4444'];
        const expectedSetDesc = ['55555', '4444', '333', '22', '1'];

        expect(mergeSort(actualSet, compareFunctionDesc)).toEqual(expectedSetDesc);
    });
})