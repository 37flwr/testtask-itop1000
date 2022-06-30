import { put, takeEvery } from 'redux-saga/effects';

import { getCurrencyRateSuccess } from './actions';
import { GET_CURRENCY_RATE } from './actionTypes';
import { sendApplyDoc } from '../../utils';

function* getCurrencyRateSaga({ payload }) {
    try {
        const apply = yield sendApplyDoc(payload)
        yield put(getCurrencyRateSuccess(apply));

    } catch (error) {
        console.log(error);
    }
}

function* currencySaga() {
    yield takeEvery(GET_CURRENCY_RATE, getCurrencyRateSaga)
}

export default currencySaga