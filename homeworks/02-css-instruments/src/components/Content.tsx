import React from "react";
import { ContentState, HandlePageClick, HandleSearch } from "../helpers/types";
import { galleryService } from "../services/galleryService";
import styles from "../styles/modules/contentModule/Content.module.css";
import { ItemList } from "./ItemList";
import { GalleryPagination as GalleryPagination } from "./GalleryPagination";
import { Search } from "./Search";
import { defaultQuery } from "../helpers/constants";

export class Content extends React.Component<{}, ContentState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            items: [],
            query: undefined,
            page: 1
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.initItems();
    }

    componentDidUpdate(prevProps: {}, prevState: ContentState) {
        if (this.state.query !== prevState.query) {
            this.initItems(1);
        }
        else if (this.state.page !== prevState.page){
            this.initItems();
        }
    }

    initItems: (page?: number) => void = (page) => {
        let currentPage = page || this.state.page
        galleryService.search(this.state.query, currentPage).then(result => {
            if (result.type === "success") {
                console.log(result);
                this.setState(prevState => ({
                    items: result.response.results,
                    query: prevState.query || defaultQuery
                }));
            }
            else {
                console.error(result);
                this.setState({
                    items: [],
                    page: undefined
                });
            }
        });
    }

    handleSearch: HandleSearch = (query) => {
        this.setState({
            query: query
        });
    }

    handlePageClick: HandlePageClick = (key) => {
        this.setState({
            page: key
        });
    }

    render() {
        let { page, query, items } = this.state;
        return (<div className={styles.content}>
            <Search onSearch={this.handleSearch} />
            <ItemList items={items} />
            <GalleryPagination page={page}
                count={items.length}
                query={query}
                onPageClick={this.handlePageClick} />
        </div>)
    }
}