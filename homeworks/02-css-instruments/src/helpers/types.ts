import { Basic as PhotoBasic } from "unsplash-js/src/methods/photos/types";

export type ItemListState = {}

export type ItemListProps = {
    items: PhotoBasic[]
}

export type ItemProps = {
    photo: PhotoBasic
}

export type SearchState = {
    query?: string;
}

export type SearchProps = {
    onSearch: HandleSearch
}

export type ContentState = {
    items: PhotoBasic[],
    query?: string,
    page?: number
}

export type GalleryPaginationProps = {
    page?: number;
    query?: string;
    count: number;
    onPageClick: HandlePageClick;
}

export type GalleryPaginationState = {
    items: JSX.Element[]
}

export type HandleSearch = (query?: string) => void;

export type HandlePageClick = (key: number) => void;