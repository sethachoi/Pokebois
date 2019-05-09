import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import styled from 'styled-components'

import { Card, Button } from '@material-ui/core'

import { getPokemonById } from 'api/pokemonEndpoints'
import { withPokemon, withSavedPokemon, addPokemon } from 'state/actions'

const MainGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: '15% 25% auto 25% 15%',
  gridTemplateRows: '36px 100px 18px auto 36px',
  width: '100vw',
  height: '100vh'
})

const NavContainer = styled.div({
  gridColumnStart: '3',
  gridColumnEnd: '4',
  gridRowStart: '2',
  gridRowEnd: '3',
  display: 'flex',
  justifyContent: 'center'
})

const NavCard = styled(Card)({
  width: '100%',
  maxWidth: '210px',
  height: 'fit-content'
})

const NavButton = styled(Button)({
  width: '50%'
})

class PokeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'all'
    }
  }

  async componentDidMount() {
    const { dispatch } = this.props
    try {
      const resp = await getPokemonById(1)
      dispatch(addPokemon([resp]))
    } catch (e) {
    }
  }

  render() {
    const { selected } = this.state
    return (
      <MainGrid>
        <NavContainer>
          <NavCard elevation={1}>
            <NavButton color={selected === 'all' ? 'primary' : ''}>All</NavButton>
            <NavButton color={selected === 'bag' ? 'primary' : ''}>Bag</NavButton>
          </NavCard>
        </NavContainer>
      </MainGrid>
    )
  }
}

export default connect()(compose(withPokemon, withSavedPokemon)(PokeList))
