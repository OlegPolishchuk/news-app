import { instance } from 'api/config';
import { BaseResponse } from 'api/types';
import { DEFAULT_LANGUAGE } from 'globalConstants';

export class NewsAPI {
  static fetchStartingNews(): Promise<BaseResponse> {
    return instance
      .get('latest-news', {
        params: {
          language: DEFAULT_LANGUAGE,
        },
      })
      .then(res => res.data);
  }

  static fetchNewsByCategory(category: string): Promise<BaseResponse> {
    return instance
      .get(`available/${category}`, {
        params: {
          language: DEFAULT_LANGUAGE,
        },
      })
      .then(res => res.data);
  }
}
