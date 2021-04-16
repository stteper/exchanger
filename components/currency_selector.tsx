import ICurrency from "../common/icurrency";
import {Currency} from "./currency";

interface ICurrencySelector {
  currencies: Array<ICurrency>,
  selected?: ICurrency,
  className?: string,
  showLost?: boolean
}

const CurrencySelector : React.FC<ICurrencySelector> = ({ currencies, selected, className, showLost }) => {
    const  viewedItems = currencies.map( (el) => {
    return (
      <Currency currency={el} className={`col-12 ${selected && selected.id === el.id ? 'active' : ''}`} key={el.id} showLost={showLost} />
    );
  });

  return (
    <div className={`col-12 ${className}`}>
      <ul className={`row ${className}__items`}>
        {viewedItems}
      </ul>
    </div>
  );
};
export default CurrencySelector;