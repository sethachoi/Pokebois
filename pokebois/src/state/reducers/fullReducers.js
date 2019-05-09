import { ADD_POKEMON } from 'state/actions'

const fullApp = ( state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return [...state, ...action.pokemonArray]
    default:
      return state
  }
}

export default fullApp