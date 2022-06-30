import axios from "axios";

export const getCurrencyRateDoc = async () => {
    const currencyRate = await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    const filteredCurrencyRate = currencyRate.data.filter((currencyPair) => currencyPair.ccy === 'USD' || currencyPair.ccy === 'EUR')
    return filteredCurrencyRate
}