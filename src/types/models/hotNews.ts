import { News } from 'types/models/news';

export interface HotNews {
  mainNews: News;
  secondNews: News;
  restNews: News[];
}
