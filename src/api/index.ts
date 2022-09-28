import { instance } from 'api/config';
import { BaseResponse } from 'types';
import { RequestParams } from 'types/models/RequestParams';

export class NewsAPI {
  static fetchStartingNews(): Promise<BaseResponse> {
    return instance.get('latest-news', {}).then(res => res.data);
  }

  static fetchNewsByCategory(params: RequestParams): Promise<BaseResponse> {
    return instance
      .get(`search/`, {
        params: {
          ...params,
        },
      })
      .then(res => res.data);
  }
}
