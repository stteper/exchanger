import {Menu, IMenuItem} from '../components/menu';
import {LangSwitcher, ILangItem} from '../components/langs';
import {NewsSection} from  '../components/news_section';

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

const langs: ILangItem[] = [
  {
    title: 'Русский',
    short: 'Рус',
    code: 'rus'
  },
  {
    title: 'English',
    short: 'Eng',
    code: 'eng'
  },
  {
    title: 'Deutsche',
    short: 'Deu',
    code: 'deu'
  }
];

const Home = () => {
  return (
    <>
      <header className="page-header">
        <div className="page-header__top-row">
          <div className="container">
            <div className="row">
              <div className="col-12 page-header__info">
                <a href="/" className="logo"><span>Test</span>Exchange</a>
                <div className="support-sect">
                  <span className="support-sect__pretext">Техническая поддержка</span>
                  <a href="#" className="support-sect__email"/>
                  <a href="#" className="support-sect__skype"/>
                  <a href="#" className="support-sect__jabber"/>
                </div>
                <div className="user-sect">
                  <a href="#" className="login">Войти</a>
                  <a href="#" className="register">Регистрация</a>
                </div>
                <LangSwitcher items={langs}/>
              </div>
            </div>
          </div>
        </div>
        <div className="page-header__bottom-row">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Menu className="main-menu" items={mainMenuItems}/>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main role="content">
        <NewsSection title="Новости нашего обменника" className="news" newsNumber="3"/>
      </main>

      <footer className="page-footer">
        <div className="page-footer__top-row">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="/" className="logo logo--footer"><span>Test</span>Exchange</a>
                <p className="small">Автоматический обмен.</p>
                <p className="small">Все права защищены. Copyright © 2018</p>
              </div>
              <div className="col-md-8 disclaimer">
                <p className="small">Test Exchange - это ведущий международный обменный сервис электронных валют. Мы проводим обмен, ввод и вывод : Perfect Money, Bitcoin, BTC-e кодов, Payeer, Киви, Яндекс. Деньги, а так же осуществляем банковские переводы. Работаем с такими банками как Сбербанк, Альфа банк, ВТБ24 и Тинькофф. Test Exchange - это лучший обменник электронных валют, предоставляющий качественный сервис по обмену, вводу и выводу Perfect Money, Bitcoin, Qiwi, Payeer, Сбербанка и многих других электронных знаков. Test Exchange - это низкие курсы, быстрый обмен и вежливая техподдержка.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer__bottom-row">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Menu className="main-menu" items={mainMenuItems}/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;