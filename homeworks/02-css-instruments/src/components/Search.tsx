import React from "react";
import { GalleryButton } from "../styles/styledComponents/GalleryButton";
import { GalleryInput } from "../styles/styledComponents/GalleryInput";
import styles from "../styles/modules/searchModule/Search.module.css";
import { HandleSearch, SearchProps, SearchState } from "../helpers/types";

export class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        this.setState({
            query: event.currentTarget.value
        });
    }

    handleClick: () => void = () => {
        this.props.onSearch(this.state.query);
    }

    render() {
        let { query } = this.state;
        return (<div className={styles.search}>
            <GalleryInput value={query}
                onChange={this.handleChange} />
            <GalleryButton onClick={this.handleClick}
                disabled={query?.length === 0}>Search</GalleryButton>
        </div>)
    }
}