import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, red } from '@material-ui/core/colors'

import Routes from 'routes'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Routes />
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
