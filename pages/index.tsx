import {Menu, IMenuItem} from '../components/menu';
import {NewsSection} from  '../components/news_section';
import {LostSection} from "../components/lost_section";
import HeaderElement from "../components/header";
import FooterElement from "../components/footer";
import ExchangeBlock from "../components/exchange_block";

const mainMenuItems: IMenuItem[] = [
  {
    title: 'Правила обмена',
    href: '#'
  },
  {
    title: 'Партнерам',
    href: '#'
  },
  {
    title: 'Отзывы',
    href: '#'
  },
  {
    title: 'Новости',
    href: '#'
  },
  {
    title: 'FAQ',
    href: '#'
  },
  {
    title: 'Контакты',
    href: '#'
  },
];

const Home = () => {
  return (
    <>
      <HeaderElement menu={mainMenuItems} />
      <main role="content">
        <ExchangeBlock />
        <LostSection title="Резервы валют:" className="lost-currencies"/>
        <NewsSection title="Новости нашего обменника" className="news" newsNumber={3} />
      </main>
      <FooterElement menu={mainMenuItems}/>
    </>
  );
};

export default Home;