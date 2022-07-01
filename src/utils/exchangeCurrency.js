import axios from "axios";

export const exchangeCurrency = async ({ amount_base, amount_conv, currency_base, currency_conv }) => {
    const value_base = await axios.get(`https://api.exchangerate.host/convert?from=${currency_base}&to=${currency_conv}&amount=${amount_base}`)
    const value_conv = await axios.get(`https://api.exchangerate.host/convert?from=${currency_conv}&to=${currency_base}&amount=${amount_conv}`)
    return {'value_base': value_base.data.result, 'value_conv':  value_conv.data.result}
}