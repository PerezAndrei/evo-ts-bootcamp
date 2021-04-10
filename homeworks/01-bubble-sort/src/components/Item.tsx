import { ItemProps } from "../types/propsTypes";

export function Item(props: ItemProps){
    return (<div className={`item size-${props.value}`}></div>)
};