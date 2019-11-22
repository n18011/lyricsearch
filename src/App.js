import React, { useMemo } from 'react'

import {
  Container,
  Box
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

import './App.css'
import Routing from './components/Routing'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0
    // backgroundColor: theme.palette.common.black
  },
  div: {
  },
  box: {
  }
}))

export default () => {
  const classes = useStyles()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(() =>
    createMuiTheme({
      palette: {
        primary: purple,
        secondary: green,
        type: prefersDarkMode ? 'dark' : 'light'
      }
    })
  , [prefersDarkMode])

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.div}>
          <Container className={classes.container} >
            <Box color='text.primary' className={classes.box}>
        Hello,App
              <Routing />
            </Box>
          </Container>
        </div>

      </ThemeProvider>
    </>
  )
}
