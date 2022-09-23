import { instance } from 'api/config';
import { BaseResponse } from 'api/types';

export class NewsAPI {
  static fetchAllNews(): Promise<BaseResponse> {
    return instance.get('news').then(res => res.data);
  }
}
