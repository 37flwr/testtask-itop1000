import { combineReducers } from "redux";

// price data
import CurrencyRate from './currency/reducer';

const rootReducer = combineReducers({ CurrencyRate })

export default rootReducer