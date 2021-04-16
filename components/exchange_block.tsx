import {ChangeEvent, ChangeEventHandler, useState} from 'react';
import ICurrency from "../common/icurrency";
import {Section} from "./section";
import CurrencySelector from "./currency_selector";
import CurrencyInput from "../common/currency_input";

interface IExchangeBlock {

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
      canOut: false
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
      canIn: false,
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
      canOut: false
    },
    {
      id: 6,
      code: 'wxu',
      img: '/images/currencies/wex.png',
      title: 'WEX USD',
      symbol: 'WXU',
      lost: 268.037,
      canIn: true,
      canOut: false
    }
  ];
  return currencies;
};

const ExchangeBlock : React.FC<IExchangeBlock> = ({ }) => {
  const [inputList, setInputList] = useState<Array<ICurrency>|undefined>(getCurrenciesLost().filter(el => el.canIn ));
  const [outputList, setOutputList] = useState<Array<ICurrency>|undefined>(getCurrenciesLost().filter(el => el.canOut));
  const [inputCurrency, setInputCurrency] = useState<ICurrency|undefined>(getCurrenciesLost().filter(el => el.canIn )[0]);
  const [outputCurrency, setOutputCurrency] = useState<ICurrency|undefined>(getCurrenciesLost().filter(el => el.canOut)[0]);
  const inputCurrHandler:ChangeEventHandler<HTMLInputElement> = (e:ChangeEvent) => {

  };
  const outputCurrHandler:ChangeEventHandler<HTMLInputElement> = (e:ChangeEvent) => {

  };
  const content = (
    <>
      <div className="col-md-4">
        <div className="row">
          <CurrencyInput currency={inputCurrency} valid={true} amount={10.02656} className="input col-12" clickHandler={inputCurrHandler}/>
          <CurrencySelector currencies={inputList} selected={inputCurrency} key="input-list"/>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <CurrencyInput currency={outputCurrency} valid={false} amount={undefined} className="output col-12" clickHandler={outputCurrHandler} />
          <CurrencySelector currencies={outputList} selected={outputCurrency} showLost={true} key="input-list"/>
        </div>
      </div>
      <div className="col-md-4">
      </div>
    </>
  );
  return (
    <Section className="exchange-sect" content={content}/>
  )
};

export default ExchangeBlock;