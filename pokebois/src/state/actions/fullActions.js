import { connect } from 'react-redux'

export const SET_POKEMON = 'SET_POKEMON'

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
 * Action to add current full pokemon obj
 */
export const setPokemon = pokemonObj => ({
  pokemonObj
})