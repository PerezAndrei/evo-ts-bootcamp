import { CompareFunction } from "../types";

export function mergeSort<T>(values: T[], compareFunction: CompareFunction<T>): T[] {
    const result = [...values];
    sort(result, 0, result.length - 1, compareFunction);
    return result;
}

function sort<T>(
    values: T[],
    indexLeft: number,
    indexRight: number,
    compareFunction: CompareFunction<T>
): void {
    if (indexLeft < indexRight) {
        const indexMid = Math.floor((indexLeft + indexRight) / 2);
        sort(values, indexLeft, indexMid, compareFunction);
        sort(values, indexMid + 1, indexRight, compareFunction);
        merge(values, indexLeft, indexMid, indexRight, compareFunction);
    }
}

function merge<T>(
    values: T[],
    indexLeft: number,
    indexMid: number,
    indexRight: number,
    compareFunction: CompareFunction<T>
): void {
    const sizeLeft = indexMid - indexLeft + 1;
    const sizeRight = indexRight - indexMid;

    const arrLeft: T[] = [];
    const arrRight: T[] = [];

    let indexLeftArray: number;
    let indexRightArray: number;

    for (indexLeftArray = 0; indexLeftArray < sizeLeft; indexLeftArray++) {
        arrLeft[indexLeftArray] = values[indexLeft + indexLeftArray];
    }

    for (indexRightArray = 0; indexRightArray < sizeRight; indexRightArray++) {
        arrRight[indexRightArray] = values[indexMid + 1 + indexRightArray];
    }

    indexLeftArray = indexRightArray = 0;
    let indexMain: number = indexLeft;

    while (indexLeftArray < sizeLeft && indexRightArray < sizeRight) {
        if (compareFunction(arrLeft[indexLeftArray], arrRight[indexRightArray]) <= 0) {
            values[indexMain] = arrLeft[indexLeftArray];
            indexLeftArray++;
        }
        else {
            values[indexMain] = arrRight[indexRightArray];
            indexRightArray++;
        }
        indexMain++;
    }

    while (indexLeftArray < sizeLeft) {
        values[indexMain] = arrLeft[indexLeftArray];
        indexLeftArray++;
        indexMain++;
    }

    while (indexRightArray < sizeRight) {
        values[indexMain] = arrRight[indexRightArray];
        indexRightArray++;
        indexMain++;
    }
}