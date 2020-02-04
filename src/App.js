import React, { useState } from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles
} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import SimpleCard from './Components/SimpleCard'
import PaperSheet from './Components/PaperSheet'

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

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    container: {
      padding: '30px 0'
    }
  }))

  const muiTheme = createMuiTheme(theme)

  const classes = useStyles()

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <NavBar toggleDarkTheme={toggleDarkTheme} theme={theme} />
      <Container maxWidth='md' className={classes.container}>
        <Hero />
        <SimpleCard />
        <PaperSheet />
      </Container>
    </MuiThemeProvider>
  )
}

export default App
