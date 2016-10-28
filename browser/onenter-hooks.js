import { fetchInitialRates } from './ducks/initial'
import store from './ducks/index'

export const onAppEnter = function() {
  store.dispatch(fetchInitialRates())
}
