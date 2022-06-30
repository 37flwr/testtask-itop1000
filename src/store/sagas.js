import { all, fork } from 'redux-saga/effects';

import currencySaga from './currency/saga'
import exchangeSaga from './exchange/saga'

export default function* rootSaga() {
    yield all([
        // currency
        fork(currencySaga),

        // exchange
        fork(exchangeSaga),
    ])
}