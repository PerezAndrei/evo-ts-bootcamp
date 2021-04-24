import { constants } from "node:os";
import React from "react";
import { TIMEOUT_TIME } from "../helpers/constants";
import { GameStatus, SortStateStatus } from "../helpers/enums";
import { ISortState } from "../interfaces/componentInterfaces";
import { getSortState } from "../models/SortState";
import { getInitialRandomSet, swapItems } from "../services/itemsService";
import { getRandomSet } from "../services/randomService";
import { ItemsProps, ItemsState } from "../types/componentTypes";
import { Item } from "./Item";

export class Items extends React.Component<ItemsProps, ItemsState> {
    private _sortTimeoutId: number | null = null;
    private _performTimeoutId: number | null = null;
    private _sortState: ISortState

    constructor(props: ItemsProps) {
        super(props);
        this._sortState = getSortState(10);
        this.state = {
            randomSet: getInitialRandomSet(),
            currentIndex: -1
        }
    }

    componentDidMount() {
        this.initRandomSet();
    }

    componentDidUpdate(prevProps: ItemsProps) {
        this.validateStatus(prevProps.status);
    }

    componentWillUnmount(){
        this._sortTimeoutId && clearTimeout(this._sortTimeoutId);
        this._performTimeoutId && clearTimeout(this._performTimeoutId);
    }

    validateStatus(prevStatus: GameStatus): void {
        if (prevStatus !== this.props.status || this.props.status === GameStatus.Running) {
            switch (this.props.status) {
                case GameStatus.Initial:
                case GameStatus.Reset:
                    this._sortState.reset();
                    this.initRandomSet();
                    break;
                case GameStatus.Next:
                case GameStatus.Running:
                    this.performSort();
                    break;
                case GameStatus.Solved:
                    this.removeCurrent();
                    break;
            }
        }
    }

    initRandomSet(): void {
        getRandomSet().then(result => {
            console.log('new random set', result)
            this.setState({
                randomSet: result,
                currentIndex: -1
            }, () => {
                this.updateStatus(GameStatus.ReadyToStart);
            });
        }).catch(error => {
            console.error(error)
        });
    }

    updateStatus(status: GameStatus): void {
        if (status === GameStatus.ReadyToStart || status === GameStatus.Pause) {
            this._sortTimeoutId = window.setTimeout(() => {
                this.props.onStatusChanged(status);
            }, TIMEOUT_TIME);
        }
        else {
            this.props.onStatusChanged(status);
        }
    }

    performSort(): void {
        this._performTimeoutId = window.setTimeout(() => {
            if (this._sortState.status === SortStateStatus.Running) {
                this.sort();
                this._sortState.setNext();
                if (this.props.status === GameStatus.Next) {
                    this.updateStatus(GameStatus.Pause);
                }
            }
            if (this._sortState.status === SortStateStatus.Finished) {
                this.updateStatus(GameStatus.Solved);
            }
        }, TIMEOUT_TIME)

    }

    sort(): void {
        const { randomSet } = this.state;
        const { stepIndex } = this._sortState;
        if (randomSet[stepIndex] > randomSet[stepIndex + 1]) {
            this.setState({
                randomSet: swapItems(randomSet, stepIndex),
                currentIndex: stepIndex + 1
            });
        }
        else {
            this.setState({
                currentIndex: stepIndex + 1
            });
        }
    }

    get currentIndex(): number {
        if (this.props.status === GameStatus.Running) {
            return this._sortState.stepIndex + 1;
        }
        else {
            return -1;
        }
    }

    removeCurrent(): void {
        this.setState({
            currentIndex: -1
        });
    }

    render() {
        const { randomSet, currentIndex } = this.state;
        return (
            <div className="items">
                {randomSet.map((element, index) =>
                    <Item key={index}
                        value={element}
                        isCurrent={index === currentIndex} />
                )}
            </div>)
    }
};