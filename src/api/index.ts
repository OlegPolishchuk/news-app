import { instance } from 'api/config';
import { BaseResponse } from 'api/types';

export class NewsAPI {
  static fetchStartingNews(): Promise<BaseResponse> {
    return instance.get('latest-news', {}).then(res => res.data);
  }

  static fetchNewsByCategory(category: string): Promise<BaseResponse> {
    return instance
      .get(`search/`, {
        params: {
          category,
        },
      })
      .then(res => res.data);
  }
}
