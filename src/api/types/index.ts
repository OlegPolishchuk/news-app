import { Article } from 'models/article';

export interface BaseResponse {
  news: Article[];
}
