import { Article } from 'models/article';

export interface HotNews {
  mainNews: Article;
  secondNews: Article;
  restNews: Article[];
}
