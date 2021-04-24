import { SortStateStatus } from "../helpers/enums";
import { IGetSortState, ISortState } from "../interfaces/componentInterfaces";

export class SortState implements ISortState {
    private _iterationIndex: number = 0;
    private _stepIndex: number = 0;
    private _length: number;
    private _status: SortStateStatus = SortStateStatus.Running;

    constructor(length: number) {
        this._length = length;
    }

    get iterationIndex() {
        return this._iterationIndex;
    }

    get stepIndex() {
        return this._stepIndex;
    };

    get status() {
        return this._status;
    }

    setNext = () => {
        if (this._status === SortStateStatus.Finished) {
            console.warn('sort is already finished');
            return;
        }

        if (this._stepIndex < this._length - this._iterationIndex - 1) {
            this._stepIndex++;
        }
        else if (this._iterationIndex < this._length - 1) {
            this._stepIndex = 0;
            this._iterationIndex++;
        }
        else {
            this._status = SortStateStatus.Finished;
        }
    };

    reset = ()=>{
        this._status = SortStateStatus.Running;
        this._iterationIndex = 0;
        this._stepIndex = 0;
    }
}

export const getSortState: IGetSortState = (length) => {
    return new SortState(length);
}