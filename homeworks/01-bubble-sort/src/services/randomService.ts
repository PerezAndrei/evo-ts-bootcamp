import { COMPOSE_RANDOM_SET_TIME } from "../helpers/constants";
import { AddRandomValue, CancelComposingRandomSet, ComposeRandomSet, GetRandomSet, RandomSet } from "../types/serviceTypes";

let intervalId: NodeJS.Timeout | null = null;
let timeoutId: NodeJS.Timeout | null = null;

export const getRandomSet: GetRandomSet = () => {
    let randomSet: RandomSet = [];
    let randomSetPromise = new Promise<RandomSet>((resolve, reject) => {
        composeRandomSet(randomSet, resolve);
        cancelComposingRandomSet(reject);
    });
    return randomSetPromise;
}

let composeRandomSet: ComposeRandomSet = (
    randomSet: RandomSet,
    callback: (randomSet: RandomSet) => void
) => {
    intervalId = setInterval(() => {
        if (randomSet.length < 10) {
            addRandomValue(randomSet);
        }
        else {
            callback(randomSet);
            performClearInterval();
            performCleartimeout();
        }
    }, 0);
}

let cancelComposingRandomSet: CancelComposingRandomSet = (callback: (reason: any) => void) => {
    timeoutId = setTimeout(() => {
        performClearInterval();
        callback(`The operation of composing a random set timed out: ${COMPOSE_RANDOM_SET_TIME}`,);
    }, COMPOSE_RANDOM_SET_TIME);
}

let addRandomValue: AddRandomValue = (randomSet) => {
    let randomValue: number = Math.floor(Math.random() * 10);
    let valueExists: boolean = randomSet.find(e => e === randomValue) !== undefined ? true : false;
    if (!valueExists) {
        randomSet.push(randomValue);
    }
}

let performClearInterval: () => void = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    else {
        console.log('intervalId has already been cleared');
    }
}

let performCleartimeout: () => void = () => {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    else {
        console.log('timeoutId has already been cleared');
    }
}