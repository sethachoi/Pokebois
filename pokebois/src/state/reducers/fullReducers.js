import { SET_POKEMON } from 'state/actions'

const fullApp = ( state = { fullPokemon: {} }, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return { fullPokemon: {...action.pokemonObj} }
    default:
      return state
  }
}

export default fullApp