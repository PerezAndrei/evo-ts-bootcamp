import { INITIAL_RANDOM_VALUE } from "../helpers/constants";
import { GetInitialRandomSet, RandomSet } from "../types/serviceTypes"

export let getInitialRandomSet: GetInitialRandomSet = () => {
    let initialrendomSet: RandomSet = [];
    for(let i =0; i <=10 ; i++){
        initialrendomSet.push(INITIAL_RANDOM_VALUE)
    }
    return initialrendomSet;
}