export type RandomSet = Array<number>;

export type GetRandomSet = () => Promise<RandomSet>;

export type AddRandomValue = (randomSet: RandomSet) => void;

export type CancelComposingRandomSet = (callback: (reaoson: any) => void) => void;

export type ComposeRandomSet = (randomSet: RandomSet, callback: (randomSet: RandomSet) => void) => void;

export type GetInitialRandomSet = () => RandomSet;