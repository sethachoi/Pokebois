import React, { Component } from 'react'

import styled from 'styled-components'

import PokemonTile from './PokemonTile'

type Props = {
  pokemon: any,
  currentId: number
}

const NavContainer = styled.div({
  gridColumnStart: '2',
  gridColumnEnd: '5',
  gridRowStart: '4',
  gridRowEnd: '5',
  display: 'flex',
  justifyContent: 'center'
})

class DisplayList extends Component {
  constructor(props: Props) {
    super(props)
  }

  render() {
    <NavContainer>
      
    </NavContainer>
  }
}

export default DisplayList
