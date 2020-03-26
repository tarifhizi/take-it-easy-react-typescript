import React, { FunctionComponent } from "react";
import NewsCard from "./newsCard.component";
import { INews } from "./news.type";
const NewsComponent: FunctionComponent<INews> = ({ title, list }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul data-testid="news-cards"></ul>
      {list.length > 0 ? (
        <ul data-testid="news-cards">
          {list.map((item, index) => (
            <li key={index}>
              <NewsCard {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no news</p>
      )}
    </div>
  );
};

export default NewsComponent;
