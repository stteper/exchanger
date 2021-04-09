import {Menu, IMenuItem} from '../components/menu';
import {LangSwitcher, ILangItem} from '../components/langs';
interface IHeaderParams {
  menu : Array<IMenuItem>,
}

// TODO убрать в стор или куда-то еще
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

const HeaderElement : React.FC<IHeaderParams> = ({ menu }) => {
  return <>
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
                <Menu className="main-menu" items={menu}/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
};

export default HeaderElement;