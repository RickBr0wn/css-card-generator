import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'

const Hero = props => {
  const useStyles = makeStyles(theme => ({
    heroContent: {
      marginBottom: theme.spacing.unit * 5
    }
  }))

  const classes = useStyles()
  return (
    <>
      <Container maxWidth='sm' className={classes.heroContent}>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom>
          Hero Component
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
      </Container>
    </>
  )
}

Hero.propTypes = {}

export default Hero
