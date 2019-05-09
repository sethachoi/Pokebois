import { connect } from 'react-redux'

export const ADD_POKEMON = 'ADD_POKEMON'

/*
 * Gets the current state's savedPokemon
 */
export const getFullPokemon = state => state.fullApp

/*
 * Sets up a component with savedPokemon in the state via recompose
 */
export const withPokemon = connect(state => ({
  fullPokemon: getFullPokemon(state)
}))

/*
 * Action to add current full pokemon array
 */
export const addPokemon = pokemonArray => ({
  type: ADD_POKEMON,
  pokemonArray
})