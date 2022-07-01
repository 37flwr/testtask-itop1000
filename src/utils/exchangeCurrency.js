import axios from "axios";

export const exchangeCurrency = async ({ amount_base, amount_conv, currency_base, currency_conv }) => {
    console.log(amount_base, amount_conv, currency_base, currency_conv);
    const valueBase = await axios.get(`https://api.exchangerate.host/convert?from=${currency_base}&to=${currency_conv}${amount_base !== '' && `&amount=${amount_base}`}`)
    const valueConv = await axios.get(`https://api.exchangerate.host/convert?from=${currency_conv}&to=${currency_base}${amount_conv !== '' && `&amount=${amount_conv}`}`)
    return {'valueBase': valueBase.data.result, 'valueConv':  valueConv.data.result}
}