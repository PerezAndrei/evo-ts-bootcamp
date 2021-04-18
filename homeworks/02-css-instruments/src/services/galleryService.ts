import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/src/helpers/response';
import { Photos } from 'unsplash-js/src/methods/search/types/response';
import { accessKey, defaultQuery } from '../helpers/constants';
import { IGalleryService } from '../helpers/interfaces';

class GalleryService implements IGalleryService {
    private readonly api;

    constructor() {
        this.api = createApi({ accessKey: accessKey });
    }

    search: (query?: string, page?: number) => Promise<ApiResponse<Photos>> = (query = defaultQuery, page = 1) => {
        //console.log('search', {query, page});
        return this.api.search.getPhotos({query: query, orientation: 'landscape', page: page, perPage: 30})
    }
}

export const galleryService: IGalleryService = new GalleryService();