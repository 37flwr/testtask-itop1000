import {
    SEND_EXCHANGE,
    SEND_EXCHANGE_SUCCESS,
} from './actionTypes';

const initialState = {
    loading: false,
    error: false,
    exchange: null,
}

const exchange = (state = initialState, action) => {
    switch(action.type) {
        case SEND_EXCHANGE:
            return {
                ...state,
                loading: true
            }
        case SEND_EXCHANGE_SUCCESS:
            return {
                ...state,
                loading: false,
                exchange: action.payload,
            }
        default:
            return state
    }
}

export default exchange