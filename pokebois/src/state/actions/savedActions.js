import { connect } from 'react-redux'

export const ADD_SAVED_POKEMON = 'ADD_SAVED_POKEMON'
export const REMOVE_SAVED_POKEMON = 'REMOVE_SAVED_POKEMON'

/*
 * Gets the current state's savedPokemon
 */
export const getSavedPokemon = state => state.savedApp

/*
 * Sets up a component with savedPokemon in the state via recompose
 */
export const withSavedPokemon = connect(state => ({
  savedPokemon: getSavedPokemon(state)
}))

/*
 * Action to add current pokemon obj
 */
export const addSavedPokemon = pokemon => ({
  type: ADD_SAVED_POKEMON,
  pokemon
})

/*
 * Action to remove pokemon from obj
 */
export const removePokemon = id => ({
  type: REMOVE_SAVED_POKEMON,
  id
})
