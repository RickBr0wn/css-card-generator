import React, { useState } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import NavBar from './Components/NavBar'

const App = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: 'dark'
    }
  })

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light'
    setTheme({
      palette: {
        type: newPaletteType
      }
    })
  }

  const muiTheme = createMuiTheme(theme)

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <NavBar toggleDarkTheme={toggleDarkTheme} theme={theme} />
    </MuiThemeProvider>
  )
}

export default App
