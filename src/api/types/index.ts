import { Article } from 'models/article';
import { Pagination } from 'models/pagination';

export interface BaseResponse {
  pagination: Pagination;
  data: Article[];
}
