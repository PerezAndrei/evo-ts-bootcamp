import { GameStatus } from "../helpers/enums";
import { RandomSet } from "./serviceTypes";

export type BubleSortProps = {}

export type BubleSortState = {
    status: GameStatus
}

export type ItemProps = {
    value: number;
}

export type ItemState = {
    value: number;
}

export type ItemsProps = {
    status: GameStatus;
    onStatusChanged: HandleStatus;
};

export type ItemsState = {
    randomSet: RandomSet;
}

export type StatusProps = {
    status: GameStatus;
    onStatusChanged: HandleStatus;
}

export type HandleStatus = (status: GameStatus) => void;