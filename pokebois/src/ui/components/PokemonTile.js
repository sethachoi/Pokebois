import React from 'react'
import { Card } from '@material-ui/core'

import styled from 'styled-components'

const TileContainer = styled.div({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
})

const TileImage = styled.div(({ src }) => ({
  backgroundImage: `url(${src})`,
  width: '75%',
  height: '75%',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}))

const PokemonTile = ({ pokemon }) => {
  const {
    name,
    id,
    sprites: { front_default: imgsrc }
  } = pokemon

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <TileContainer>
      <Card elevation={1}>
        <TileImage src={imgsrc} />
      </Card>
      {capitalizedName}
    </TileContainer>
  )
}

export default PokemonTile
