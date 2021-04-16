import ICurrency from "./icurrency";
import {ChangeEventHandler} from "react";

interface ICurrencyInput {
  currency: ICurrency,
  amount: number|null,
  valid: boolean,
  className?: string
  clickHandler: ChangeEventHandler<HTMLInputElement>
}

const CurrencyInput : React.FC<ICurrencyInput> = ({ currency, amount, valid, className, clickHandler }) => {
  const currencyBlock:JSX.Element = currency ? (
      <span className="currency-input__currency-block">
        <img src={currency.img} alt={currency.title} className="currency-input__currency-icon"/>
        {currency.symbol}
      </span>
  ) : null;

  return (
    <div className={`exchange-sect__input-block currency-input currency-input--${className}`}>
      <div className="currency-input__wrapper">
         <span className="currency-input__field-block">
           <input type="text" className={`currency-input__field ${!valid ? 'invalid' : ''}`} value={amount!== undefined ? amount : '' } onChange={clickHandler}/>
         </span>
        {currencyBlock}
      </div>
    </div>
  )
};

export default CurrencyInput;