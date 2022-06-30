import {
    GET_CURRENCY_RATE,
    GET_CURRENCY_RATE_SUCCESS,
} from './actionTypes';

const initialState = {
    loading: false,
    error: false,
    currencyRate: null,
}

const currency = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENCY_RATE:
            return {
                ...state,
                loading: true
            }
        case GET_CURRENCY_RATE_SUCCESS:
            return {
                ...state,
                loading: false,
                currencyRate: action.payload,
            }
        default:
            return state
    }
}

export default currency