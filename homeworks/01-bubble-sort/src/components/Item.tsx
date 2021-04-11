import { ItemProps } from "../types/componentTypes";

export function Item(props: ItemProps) {
    return (
        <div className={props.isCurrent ? `item current size-${props.value}` : `item size-${props.value}`}>
        </div >
    )
};