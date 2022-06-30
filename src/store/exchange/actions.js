import {
    SEND_EXCHANGE,
    SEND_EXCHANGE_SUCCESS,
} from './actionTypes';

export const sendExchange = (payload) => {
    return {
        type: SEND_EXCHANGE,
        payload
    }
}

export const sendExchangeSuccess = (payload) => {
    return {
        type: SEND_EXCHANGE_SUCCESS,
        payload
    }
}