import React from 'react'

import {
  Container,
  Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

import './App.css'
import Lyrics from './components/Lyrics'
import HitsLyrics from './components/HitsLyrics'
import { LyricsProvider } from './context/LyricsProvider'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
  },
}))

  const theme = createMuiTheme({
      palette: {
        primary: purple,
        secondary: green,
        type: 'dark'
      }
    })


export default () => {
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={theme}>
      <LyricsProvider>

         <Lyrics>
          <Container className={classes.container} >
            <Box color='text.primary'>
              <HitsLyrics/>
            </Box>
          </Container>
          </Lyrics>

      </LyricsProvider>
      </ThemeProvider>
    </>
  )
}
