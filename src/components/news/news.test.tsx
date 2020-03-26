import React from "react";
import { render, cleanup } from "@testing-library/react";
import News from "./news.component";
import NewsCard from "./newsCard.component";
import news from "./news.template";
const EMPTY_MESSAGE = "There is no news";

afterEach(cleanup);

describe("<News />", () => {
  it("should display the title of the news section", () => {
    const wrap = render(<News title={news.title} list={news.list} />);
    expect(wrap.getByText(news.title)).toBeTruthy();
  });
  it("should display a list of news if available", () => {
    const wrap = render(<News title={news.title} list={news.list} />);
    expect(wrap.container.querySelectorAll("li").length).toEqual(
      news.list.length
    );
  });
  it("should display an empty message  if news is not available", () => {
    const empty = render(<News list={[]} />);
    expect(empty.container.querySelectorAll("li").length).toEqual(0);
    expect(empty.getByText(EMPTY_MESSAGE)).toBeTruthy();
  });
  describe("<NewsCard />", () => {
    it("should contains a read more button with a link to article", () => {
      const wrap = render(<NewsCard {...news.list[0]} />);
      expect(wrap.getByText("read more").closest("a")).toHaveAttribute(
        "href",
        news.list[0].link
      );
    });
    it("should contains an image, title and description", () => {
      const wrap = render(<NewsCard {...news.list[0]} />);
      expect(wrap.container.querySelector("img")).toHaveAttribute(
        "src",
        news.list[0].img.url
      );
      expect(wrap.getByText(news.list[0].title)).toBeTruthy();
      expect(wrap.getByText(news.list[0].description)).toBeTruthy();
    });
  });
});
