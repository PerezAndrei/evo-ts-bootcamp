import React from "react";
import { Basic as PhotoBasic } from "unsplash-js/src/methods/photos/types";
import { ItemListProps, ItemListState } from "../helpers/types";
import { galleryService } from "../services/galleryService";
import { Item } from "./Item";
import styles from "../styles/modules/itemListModule/ItemList.module.css";

export class ItemList extends React.Component<ItemListProps, ItemListState>{
    constructor(props: ItemListProps) {
        super(props);
    }

    render() {
        let { items } = this.props;
        return (<div className={styles.itemList}>
            {items.map((item, index) => (
                <Item key={item.id}
                    photo={item} />
            ))}
            {!items.length && 'nothing found'}
        </div>)
    }
}