export interface IMenuItem {
  title: string,
  href: string,
  className?: string
}

interface IMenu {
  className: string,
  items: Array<IMenuItem>
}

const renderMenuItem = (el:IMenuItem, ind: number, clName: string ):JSX.Element => {
  return <li key={ind} className={el.className ? el.className : `${clName}__item`}>
      <a href={el.href}>{el.title}</a>
    </li>;
};

const Menu : React.FC<IMenu> = ({ items, className }) => {
  let menuItems = items.map( (el, ind) => {
    return renderMenuItem(el, ind, className);
  });

  return (
    <nav className={`${className}-container`}>
      <ul className={`${className}`}>
        { menuItems }
      </ul>
    </nav>
  );
};
export {Menu};