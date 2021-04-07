import INews from "../common/inews";

interface INewsPreview {
  news: INews,
  containerClass?: string
}

const NewsPreview : React.FC<INewsPreview> = ( {news, containerClass} ) => {
  return (
    <div className={`news-preview-container ${containerClass}`} key={news.id}>
      <article className="news-preview">
        <header className="news-preview__title">
          <a href={news.link}>{news.title}</a>
        </header>
        <div className="news-preview__content">
          <p>{news.preview}</p>
          <p className="news-preview__date">{news.date}</p>
        </div>
      </article>
    </div>
  );
};
export default NewsPreview;