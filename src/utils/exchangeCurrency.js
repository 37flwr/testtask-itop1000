import axios from "axios";

export const exchangeCurrency = (base_curr, exchange_curr, amount) => {
    const output = axios.get(`https://api.exchangerate.host/convert?from=${base_curr}&to=${exchange_curr}&amount=${amount}`)
    return output
}