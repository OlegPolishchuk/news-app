import { Article } from 'models/article';

export interface StartPageArticles {
  general: Article[];
  sports: Article[];
  business: Article[];
  entertainment: Article[];
  health: Article[];
  science: Article[];
  technology: Article[];
}
