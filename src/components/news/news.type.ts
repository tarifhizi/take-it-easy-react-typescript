export interface INewsItemImage {
  url: string;
  alt: string;
}
export interface INewsItem {
  img?: INewsItemImage;
  title: string;
  link: string;
  description: string;
}
export interface INews {
  title: string;
  news: INewsItem[];
}
