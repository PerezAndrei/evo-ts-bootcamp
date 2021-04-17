import { ApiResponse } from "unsplash-js/src/helpers/response";
import { Photos } from "unsplash-js/src/methods/search/types/response";

export interface IGalleryService{
    search: (query: string) => Promise<ApiResponse<Photos>>;
}