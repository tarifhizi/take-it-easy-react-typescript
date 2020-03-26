import React, { FunctionComponent } from "react";
import { INewsItem } from "./news.type";
const NewsItemComponent: FunctionComponent<INewsItem> = ({
  title,
  link,
  img,
  description
}) => {
  return (
    <>
      <img src={img.url} alt={img.alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>read more</a>
    </>
  );
};

export default NewsItemComponent;
