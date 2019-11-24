import React, {useContext} from 'react'

import {
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  Icon
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';

import ScrollTop from './ScrollTop.jsx'
import { LyricsContext } from '../context/LyricsProvider'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default ({children}) => {
  const classes = useStyles()
  const { setValue, isShow, setIsShow } = useContext(LyricsContext)
  return (
    <>
    <header className={classes.root}>
    <AppBar position="static">
      <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            aria-label="open drawer"
          >
      <QueueMusicRoundedIcon/>
          </IconButton>

            <Toolbar >
            <TextField
              id="filled-secondary"
              variant="outlined"
              color="secondary"
              onChange={(e) => setValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />


            </Toolbar>
          </AppBar>
          <Toolbar id='back-to-top-anchor' />
        </header>

    {children}
    <ScrollTop></ScrollTop>
    </>
  )
}