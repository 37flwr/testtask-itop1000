import axios from "axios";

export const getCurrencyRateDoc = async () => {
    const currencyRate = await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    return currencyRate.data
}