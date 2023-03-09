import { combineReducers } from 'redux'
import counter from './counterReducer'
import games from './gamesReducers'

export default combineReducers({
  games,
  counter
})