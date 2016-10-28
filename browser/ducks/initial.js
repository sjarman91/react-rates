import axios from 'axios'

// -------------- CONSTANTS
const INITIALIZE = 'INITIALIZE';


// -------------- SYNC ACTION CREATORS
export const initialize = function(rateData) {
  const initializeAction = {
    type: INITIALIZE,
    rateData
  }
  return initializeAction
}

// -------------- ASYNC ACTION CREATORS
export const fetchInitialRates = function() {
  const thunk = function(dispatch){
    const fetchingTens = axios.get('/api/tens')
    const fetchingThirties = axios.get('/api/thirties')

    Promise.all([fetchingTens,fetchingThirties])
      .then(function(axiosResponses) {
        let tensArr = axiosResponses[0].data
        let thirtiesArr = axiosResponses[1].data

        const actionToSend = initialize({tens: tensArr, thirties: thirtiesArr})
        dispatch(actionToSend)
      })
  }
  return thunk
}
