import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import styled from 'styled-components'

import { getPokemonById } from 'api/pokemonEndpoints'
import { withPokemon, withSavedPokemon, addPokemon } from 'state/actions'

class PokeList extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const { dispatch } = this.props
    console.log('hello')
    console.log(dispatch)
    console.log(this.props)
    try {
      const resp = await getPokemonById(1)
      console.log(resp)
      dispatch(addPokemon([resp]))
      console.log(this.props)
    } catch (e) {

    }
  }

  render() {
    return (
      <div>
        Hello there
      </div>
    )
  }
}

export default connect()(compose(withPokemon, withSavedPokemon)(PokeList))
