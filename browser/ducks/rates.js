import axios from 'axios'

const INITIALIZE = 'INITIALIZE';

const initialRates = {tens: [{value: "1.00", date: "2016/1/1"}], thirties: [{value: '', date: ''}]}

export const ratesReducer = function(state = initialRates , action) {
  switch(action.type) {
    case INITIALIZE:
      return action.rateData

    default: return state;
  }
}
