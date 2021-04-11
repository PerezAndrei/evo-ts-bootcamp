import React from "react";
import { ItemProps, ItemState } from "../types/componentTypes";

export class Item extends React.Component<ItemProps, ItemState>{

    constructor(props: ItemProps) {
        super(props);
        this.state = {
            value: 0
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState(()=>({
                value: this.props.value
            }));
        },0);
    }

    render() {
        return (
        <div className={`item size-${this.state.value}`}>           
        </div >
        )
    }
};