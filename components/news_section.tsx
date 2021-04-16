import {Section, ISection} from "./section";
import INews from "../common/inews";
import NewsPreview from "./news_preview";

interface INewsSection {
  className: string,
  title: string,
  newsNumber?: number
}

/**
 * Plug function
 * TODO must be removed when Store was finished
 * @param {number} num
 * @returns {Array<INews>}
 */
function getNews(num?:number):Array<INews> {
  const news:Array<INews> = [
    {
      id: 1,
      title: 'Добавление нашего обменника в мониторинг xrates.ru',
      preview: 'Рады вас уведомить о том, что сервис по мониторингу обменников xrates.ru добавил нас в свой список. Ознакамливайтесь с обменами на xrates.ru!',
      link: '#',
      date: '01.01.2018',
      content: ''
    },
    {
      id: 2,
      title: 'Добавление нашего обменника в мониторинг xrates.ru',
      preview: 'Рады вас уведомить о том, что сервис по мониторингу обменников xrates.ru добавил нас в свой список. Ознакамливайтесь с обменами на xrates.ru!',
      link: '#',
      date: '01.01.2018',
      content: ''
    },
    {
      id: 3,
      title: 'Добавление нашего обменника в мониторинг xrates.ru',
      preview: 'Рады вас уведомить о том, что сервис по мониторингу обменников xrates.ru добавил нас в свой список. Ознакамливайтесь с обменами на xrates.ru!',
      link: '#',
      date: '01.01.2018',
      content: ''
    }
  ];
  return news;
}

const NewsSection : React.FC<INewsSection> = ({ title, className, newsNumber }) => {
  if(typeof newsNumber === 'undefined') {
    newsNumber = 3;
  }
  const news = getNews(newsNumber);
  const content = news.map((el) => {
      return (
        <NewsPreview news={el} containerClass="col-md-4" key={el.id}/>
      );
    });

  return (
    <Section title={title} className={className} content={content} />
  );
};
export {NewsSection};