import React from "react";
import { Pagination } from "react-bootstrap";
import { GalleryPaginationProps, GalleryPaginationState } from "../helpers/types";

export class GalleryPagination extends React.Component<GalleryPaginationProps, GalleryPaginationState> {
    constructor(props: GalleryPaginationProps) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        if (this.props.count > 0) {
            this.initItems()
        }
    }

    componentDidUpdate(prevProps: GalleryPaginationProps, prevState: GalleryPaginationState) {
        if ((this.props.query !== prevProps.query && this.props.count > 0) || this.props.page !== prevProps.page) {
            this.initItems();
        }
    }

    handleClick: (event: React.MouseEvent<HTMLElement>, key: number) => void = (event, key) => {
        //({event, key});
        this.props.onPageClick(key);
    }

    initItems(): void {
        let items: JSX.Element[] = [];
        let active = this.props.page;
        for (let number = 1; number <= 10; number++) {
            items.push(
                <Pagination.Item onClick={($event) => { this.handleClick($event, number)}}
                    key={number}
                    active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
        this.setState({
            items: items
        })
    }

    render() {
        let { items } = this.state;
        return (<div>
            <Pagination>{items}</Pagination>
        </div>)
    }
}