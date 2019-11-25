import React, { useState, useContext } from 'react'

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { LyricsContext } from '../context/LyricsProvider'
import logo from '../search-by-algolia-light-background.png'

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(3),
    height: '100vh'
  },
  back: {
    backgroundColor: theme.palette.common.black,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  line: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(1)
  },
  dot: {
    height: '85vh'
  }
}))

export default () => {
  const classes = useStyles()
  const { lyrics, isShow, setIsShow } = useContext(LyricsContext)
  const [content, setContent] = useState({})

  const handleClick = (lyric) => {
    setContent(lyric)
    setIsShow(true)
  }

  return (
    <>
      {isShow ? (
        <div className={classes.content}>
          <Typography variant='h5' align='center' gutterBottom>{`${content.lyric_num} ${content.title}`}</Typography>
          {content.lyrics.map((lyric, index) => (
            <Typography key={index} variant='body1' align='center' color='textSecondary' className={classes.line}>{`${index + 1} ${lyric}`}</Typography>
          ))}
          <Typography color='primary' className={classes.back}>
            <Button
              color='primary'
              onClick={() => setIsShow(false)}>もどる</Button>
          </Typography>
        </div>
      ) : (
          <>
            <List>
              {lyrics.map(lyric => {
                return (
                  <ListItem
                    key={lyric.lyric_num}
                    onClick={() => handleClick(lyric)}
                    button
                  >
                    <ListItemText
                      primary={`${lyric.lyric_num} ${lyric.title}`}
                      secondary={lyric.lyrics ? <Typography color='textSecondary' noWrap>{lyric.lyrics[0]}</Typography> : ''}
                    />
                  </ListItem>
                )
              })}
            </List>
            <img src={logo} alt='search-by-algolia-logo' />
            <Typography color='textSecondary' className={classes.dot}>815件中{lyrics.length}件表示中(表示可能最大件数100件)</Typography>
          </>)}
    </>
  )
}