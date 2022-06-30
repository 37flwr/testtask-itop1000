import { put, takeEvery } from 'redux-saga/effects';

import { sendExchangeSuccess } from './actions';
import { SEND_EXCHANGE } from './actionTypes';
import { exchangeCurrency } from '../../utils';

function* sendExchangeSaga({ payload }) {
    try {
        const exchange = yield exchangeCurrency(payload)
        yield put(sendExchangeSuccess(exchange.data.result));

    } catch (error) {
        console.log(error);
    }
}

function* exchangeSaga() {
    yield takeEvery(SEND_EXCHANGE, sendExchangeSaga)
}

export default exchangeSaga