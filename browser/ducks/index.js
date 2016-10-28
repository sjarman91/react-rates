import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import { ratesReducer } from './rates'

const rootReducer = combineReducers({
  rateData: ratesReducer
})
const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)

export default createStore(rootReducer, middleware);
