import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/src/helpers/response';
import { Photos } from 'unsplash-js/src/methods/search/types/response';
import { accessKey } from '../helpers/constants';
import { IGalleryService } from '../helpers/interfaces';

class GalleryService implements IGalleryService {
    private readonly api;

    constructor() {
        this.api = createApi({ accessKey: accessKey });
    }

    search: (query: string) => Promise<ApiResponse<Photos>> = (query) => {
        return this.api.search.getPhotos({query: query, orientation: 'landscape', page: 1, perPage: 50})
    }
}

export const galleryService: IGalleryService = new GalleryService();