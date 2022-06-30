import { put, takeEvery } from 'redux-saga/effects';

import { getCurrencyRateSuccess } from './actions';
import { GET_CURRENCY_RATE } from './actionTypes';
import { getCurrencyRateDoc } from '../../utils';

function* getCurrencyRateSaga({ payload }) {
    try {
        const rate = yield getCurrencyRateDoc(payload)
        yield put(getCurrencyRateSuccess(rate));

    } catch (error) {
        console.log(error);
    }
}

function* currencySaga() {
    yield takeEvery(GET_CURRENCY_RATE, getCurrencyRateSaga)
}

export default currencySaga