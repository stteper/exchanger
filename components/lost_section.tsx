import {Section, ISection} from "./section";
import ICurrency from "../common/icurrency";
import {Currency} from "./currency";


interface ICurrencyLostSection {
  title: string,
  className?: string|undefined,
  items?: Array<ICurrency>|undefined
}
const getCurrenciesLost = ():Array<ICurrency> => {
  const currencies: Array<ICurrency> = [
    {
      id: 1,
      img: '/images/currencies/btc.png',
      code: 'btc',
      title: 'Bitcoin',
      symbol: 'BTC',
      lost: 2.4565465,
      canIn: true,
      canOut: true
    },
    {
      id: 2,
      code: 'bch',
      img: '/images/currencies/btc.png',
      title: 'Bitcoin Cash',
      symbol: 'BCH',
      lost: 29.4465,
      canIn: true,
      canOut: true
    },
    {
      id: 3,
      code: 'ltc',
      img: '/images/currencies/ltc.png',
      title: 'Litecoin',
      symbol: 'LTC',
      lost: 35.123,
      canIn: true,
      canOut: true
    },
    {
      id: 4,
      code: 'dsh',
      img: '/images/currencies/dash.png',
      title: 'Dash',
      symbol: 'DSH',
      lost: 568.123,
      canIn: true,
      canOut: true
    },
    {
      id: 5,
      code: 'wxr',
      img: '/images/currencies/wex.png',
      title: 'WEX RUB',
      symbol: 'WXR',
      lost: 1568.123,
      canIn: true,
      canOut: true
    },
    {
      id: 6,
      code: 'wxu',
      img: '/images/currencies/wex.png',
      title: 'WEX USD',
      symbol: 'WXU',
      lost: 268.037,
      canIn: true,
      canOut: true
    }
  ];
  return currencies;
};

const LostSection : React.FC<ICurrencyLostSection> = ({ title, className, items }) => {
  if(typeof items === 'undefined') {
    items = getCurrenciesLost();
  }
  const  viewedItems = items.map( (el) => {
    return (
      <Currency currency={el} className="col-md-4" key={el.id} showLost={true} />
    );
  });

  const content = (
    <div className="col-12">
      <ul className={`row ${className}__items`}>
        {viewedItems}
      </ul>
    </div>
  );


  return (
    <Section title={title} className={className} content={content} />
  );
};
export {LostSection};