import { News } from 'types/models/news';

export interface StartPageNews {
  general: News[];
  sports: News[];
  business: News[];
  entertainment: News[];
  health: News[];
  science: News[];
  technology: News[];
}
