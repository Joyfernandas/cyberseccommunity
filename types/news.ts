export interface NewsItem {
  id: string;
  title: string;
  url: string;
  source: string;
  time: string;
  excerpt: string;
  image?: string;
  points?: number;
  comments?: number;
}