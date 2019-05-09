import {
  ADD_SAVED_POKEMON,
  REMOVE_SAVED_POKEMON
} from 'state/actions'

const savedApp = ( state = {}, action) => {
  switch (action.type) {
    case ADD_SAVED_POKEMON:
      return { ...state, [action.pokemon.id]: action.pokemon }
    case REMOVE_SAVED_POKEMON:
      return Object.keys(state)
        .filter(key => key !== action.id)
        .reduce((obj, key) => ({
          ...obj,
          [key]: state[key]
        }), {})
    default:
      return state
  }
}

export default savedApp