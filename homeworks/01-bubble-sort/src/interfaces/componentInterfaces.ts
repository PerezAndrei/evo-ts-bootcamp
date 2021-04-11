import { SortStateStatus } from "../helpers/enums";

export interface ISortState {
    iterationIndex: number;
    stepIndex: number;
    status: SortStateStatus;
    setNext: () => void;
    reset: () => void;
}

export interface IGetSortState {
    (length: number): ISortState;
}