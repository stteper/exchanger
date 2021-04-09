import {Menu, IMenuItem} from '../components/menu';
import HeaderElement from "./header";
interface IFooterParams {
  menu : Array<IMenuItem>,
}
const FooterElement : React.FC<IFooterParams> = ({ menu }) => {
  return <footer className="page-footer">
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
            <Menu className="main-menu" items={menu}/>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};

export default FooterElement;