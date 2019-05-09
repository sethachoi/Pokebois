import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getPokemonById } from 'api/pokemonEndpoints'

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

export default connect()(PokeList)
