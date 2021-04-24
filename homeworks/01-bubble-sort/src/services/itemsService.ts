import { INITIAL_RANDOM_VALUE } from "../helpers/constants";
import { SwapItems } from "../types/componentTypes";
import { GetInitialRandomSet, RandomSet } from "../types/serviceTypes"

export const getInitialRandomSet: GetInitialRandomSet = () => {
    const initialrendomSet: RandomSet = [];
    for (let i = 0; i <= 10; i++) {
        initialrendomSet.push(INITIAL_RANDOM_VALUE)
    }
    return initialrendomSet;
}

export const swapItems: SwapItems = (randomSet, index) => {
    console.log('swapItems before', randomSet);
    const newRandomSet: RandomSet = [...randomSet];
    [newRandomSet[index], newRandomSet[index + 1]] = [newRandomSet[index + 1], newRandomSet[index]];
    console.log('swapItems after', newRandomSet);
    return newRandomSet;
}