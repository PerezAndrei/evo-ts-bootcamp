import { COMPOSE_RANDOM_SET_TIME } from "../helpers/constants";
import { AddRandomValue, CancelComposingRandomSet, ComposeRandomSet, GetRandomSet, RandomSet } from "../types/serviceTypes";

let intervalId: number | null;
let timeoutId: number| null;

export const getRandomSet: GetRandomSet = () => {
    const randomSet: RandomSet = [];
    const randomSetPromise = new Promise<RandomSet>((resolve, reject) => {
        composeRandomSet(randomSet, resolve);
        cancelComposingRandomSet(reject);
    });
    return randomSetPromise;
}

const composeRandomSet: ComposeRandomSet = (
    randomSet: RandomSet,
    callback: (randomSet: RandomSet) => void
) => {
    intervalId = window.setInterval(() => {
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

const cancelComposingRandomSet: CancelComposingRandomSet = (callback: (reason: any) => void) => {
    timeoutId = window.setTimeout(() => {
        performClearInterval();
        callback(`The operation of composing a random set timed out: ${COMPOSE_RANDOM_SET_TIME}`,);
    }, COMPOSE_RANDOM_SET_TIME);
}

const addRandomValue: AddRandomValue = (randomSet) => {
    const randomValue: number = Math.floor(Math.random() * 10);
    if (!randomSet.includes(randomValue)) {
        randomSet.push(randomValue);
    }
}

const performClearInterval: () => void = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    else {
        console.log('intervalId has already been cleared');
    }
}

const performCleartimeout: () => void = () => {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    else {
        console.log('timeoutId has already been cleared');
    }
}