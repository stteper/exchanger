import { useState } from 'react';

export interface ILangItem {
  title: string,
  short: string,
  code: string
}

interface ILang {
  items: Array<ILangItem>
}



const LangSwitcher : React.FC<ILang> = ({ items }) => {
  const [curLang, setCurLang] = useState<ILangItem|undefined>(items[0]);
  const [openTimer, setLangOpened] = useState<NodeJS.Timeout|null>(null);

  const setLangTimer = (st:NodeJS.Timeout|null):void => {
    if(st === null) {
      clearTimeout(openTimer);
      setLangOpened(null);
    } else {
      setLangOpened(st);
    }
  };

  const toggleLangList = ():void => {
    if(openTimer !== null) {
      setLangTimer(null);
      return;
    }
    setLangTimer(setTimeout(() => {setLangTimer(null)}, 10000));
  };

  const renderLangItems = (item: ILangItem):JSX.Element => {
    return <li className={`lang-sect__item lang-sect__item--${item.code}`} key={item.code} onClick={() => setCurLang(item)}>{item.title}</li>
  };

  const renderedItems = items.map((el) => renderLangItems(el));
  return (
    <div className="lang-sect">
      <button className={`lang-sect__preset ${openTimer ? 'active' : ''}`} onClick={ () => toggleLangList() }>{curLang.short}</button>
      <ul id="lang-items" className={`lang-sect__items ${openTimer ? 'opened' : ''}`}>
        {renderedItems}
      </ul>
    </div>
  );
};
export {LangSwitcher};