import axios from "axios";

export const exchangeCurrency = async (base_curr, exchange_curr, amount) => {
    // const output = axios.get(`https://api.exchangerate.host/convert?from=${base_curr}&to=${exchange_curr}&amount=${amount}`)
    const output = await axios.get('https://api.exchangerate.host/convert?from=UAH&to=USD&amount=12')
    return output
}