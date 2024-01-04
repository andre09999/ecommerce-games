import { combineReducers } from 'redux'
import counter from './counterReducer'
import games from './gamesReducers'
import compra from './compraReducers'

export default combineReducers({
  games,
  counter,
  compra
})