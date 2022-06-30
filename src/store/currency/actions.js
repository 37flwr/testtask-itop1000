import {
    GET_CURRENCY_RATE,
    GET_CURRENCY_RATE_SUCCESS,
} from './actionTypes';

export const getCurrencyRate = (payload) => {
    return {
        type: GET_CURRENCY_RATE,
        payload
    }
}

export const getCurrencyRateSuccess = (payload) => {
    return {
        type: GET_CURRENCY_RATE_SUCCESS,
        payload
    }
}