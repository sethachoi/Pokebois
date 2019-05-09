import React from 'react'
import { Route } from 'react-router-dom'

import { PokeList } from 'scenes'

const Routes = () => (
  <div>
    <Route path='/' exact component={PokeList} />
  </div>
)

export default Routes
