import React from "react";
import { GameStatus } from "../helpers/enums";
import { getInitialRandomSet } from "../services/itemsService";
import { getRandomSet } from "../services/randomService";
import { ItemsProps, ItemsState } from "../types/componentTypes";
import { Item } from "./Item";

export class Items extends React.Component<ItemsProps, ItemsState> {
    constructor(props: ItemsProps) {
        super(props);
        this.state = {
            randomSet: []
        }
    }

    componentDidMount() {
        getRandomSet().then(result => {
            this.setState({
                randomSet: result
            }, ()=>{
                this.props.onStatusChanged(GameStatus.ReadyToStart);
            });
        }).catch(error => {
            console.error(error)
        });
    }

    render() {
        let { randomSet } = this.state;
        return (
            <div className="items">
                {randomSet.map((element) =>
                    <Item key={element}
                        value={element} />
                )}
            </div>)
    }
};