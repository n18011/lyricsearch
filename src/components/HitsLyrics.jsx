import React, { useState, useContext } from 'react'

import {
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  IconButton,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles'

import { LyricsContext } from '../context/LyricsProvider'

const useStyles = makeStyles(theme => ({
  content: {
    height: '100vh'
  },
  back: {
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
  const { lyrics, setValue } = useContext(LyricsContext)
  const [isShow, setIsShow] = useState(false)
  const [content, setContent] = useState({})

  const handleClick = (lyric) => {
    setContent(lyric)
    setIsShow(true)
  }

  return (
    <>
      {isShow ? (
        <div className={classes.content}>
          <Typography color='primary' className={classes.back}>
            <Link
              color='inherit'
              underline='always'
              onClick={() => setIsShow(false)}>もどる</Link>
          </Typography>
          <Typography variant='h5' align='center' gutterBottom>{`${content.lyric_num} ${content.title}`}</Typography>
          {content.lyrics.map((lyric, index) => (
            <Typography key={index} variant='body1' align='center' color='textSecondary' className={classes.line}>{`${index + 1} ${lyric}`}</Typography>
          ))}
        </div>
      ) : (
          <>
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
            <Typography variant='h5' color='textSecondary'>...</Typography>
            <Typography color='textSecondary' className={classes.dot}>815件中{lyrics.length}件表示中(表示可能最大件数100件)</Typography>
          </>)}
    </>
  )
}