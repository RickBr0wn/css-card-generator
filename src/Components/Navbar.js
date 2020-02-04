import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness2Icon from '@material-ui/icons/Brightness2'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navbar: {
    background: theme.palette.type === 'light' ? '#bbb' : '#424242',
    color: theme.palette.type === 'light' ? '#424242' : '#bbb'
  },
  moon: {
    marginTop: '4px',
    color: 'grey'
  },
  sun: {
    marginTop: '4px',
    color: 'yellow'
  }
}))

const NavBar = ({ toggleDarkTheme, theme }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            CSS Card Generator
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  value='checkedC'
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  onChange={toggleDarkTheme}
                  color='default'
                />
              }
              label={
                theme.palette.type === 'light' ? (
                  <Brightness2Icon className={classes.moon} />
                ) : (
                  <Brightness7Icon className={classes.sun} />
                )
              }
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  theme: PropTypes.object.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired
}

export default NavBar
