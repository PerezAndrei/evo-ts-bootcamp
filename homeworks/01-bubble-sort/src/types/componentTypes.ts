import { GameStatus } from "../helpers/enums";
import { RandomSet } from "./serviceTypes";

export type BubleSortProps = {}

export type BubleSortState = {
    status: GameStatus
}

export type ItemProps = {
    value: number;
    isCurrent: boolean;
}

export type ItemState = {}

export type ItemsProps = {
    status: GameStatus;
    onStatusChanged: HandleStatus;
};

export type ItemsState = {
    randomSet: RandomSet;
    currentIndex: number;    
}

export type ControlPanelProps = {
    onStatusChanged: HandleStatus;
    status: GameStatus;
}

export type ControlPanelState = {}

export type StatusProps = {
    status: GameStatus;
    onStatusChanged: HandleStatus;
}

export type HandleStatus = (status: GameStatus) => void;

export type SwapItems = (randomSet: RandomSet, index: number) => RandomSet;

export type ControlButtonClick = (status: GameStatus) => void;