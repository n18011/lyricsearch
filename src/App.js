import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

import Routing from './components/Routing'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    type: 'dark'
  },
  status: {
    danger: 'orange'
  }
})

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        Hello,App
        <Routing />
      </ThemeProvider>
    </>
  )
}
