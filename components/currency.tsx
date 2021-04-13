import ICurrency from "../common/icurrency";

interface ICurrencyParams {
  currency : ICurrency,
  className?: string
  showLost? : boolean
}

const Currency : React.FC<ICurrencyParams> = ({ currency, className, showLost = false }) => {
  return (
    <li className={`${className} currency`}>
      <span className={`currency__icon currency__icon--${currency.code.toLowerCase()}`}>
        <img src={currency.img} alt={currency.title} />
      </span>
      <span className="currency__name">{currency.title}</span>
      {showLost ? <span className="currency__lost">{currency.lost}<span className="currency__symbol">{currency.symbol}</span></span> : ''}
    </li>
  );
};
export {Currency};