import React from "react";
import { Basic as PhotoBasic } from "unsplash-js/src/methods/photos/types";
import { ItemProps } from "../helpers/types";
import styles from "../styles/modules/itemModule/Item.module.css";

export class Item extends React.Component<ItemProps, {}> {
    constructor(props: ItemProps) {
        super(props);
    }

    render() {
        let { urls, user } = this.props.photo;

        return (
            <div className={styles.item}>
                <a
                    className="credit"
                    target="_blank"
                    href={`https://unsplash.com/@${user.username}`}>
                    <img title={user.name} className="img" src={urls.small} />
                </a>
            </div>
        )
    }
}