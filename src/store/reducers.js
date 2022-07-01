import { combineReducers } from "redux";

// currency rate
import CurrencyRate from './currency/reducer';

const rootReducer = combineReducers({ CurrencyRate })

export default rootReducer