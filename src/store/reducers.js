import { combineReducers } from "redux";

// currency rate
import CurrencyRate from './currency/reducer';

// exchange
import Exchange from './exchange/reducer'

const rootReducer = combineReducers({ CurrencyRate, Exchange })

export default rootReducer