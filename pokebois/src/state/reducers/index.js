import { combineReducers } from 'redux'
import savedApp from './savedReducers'
import fullApp from './fullReducers'

const pokemonApp = combineReducers({
  savedApp,
  fullApp
})

export default pokemonApp