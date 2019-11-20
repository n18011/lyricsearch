import React from 'react'

import {
  connectHits
} from 'react-instantsearch-dom'

import {
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default
  },
  lyric: {
    backgroundColor: theme.palette.background.paper
  }
}))

const Hits = ({ hits }) => {
  const classes = useStyles()
  return (
    <>
      {hits.map(hit => (
        <div key={hit.lyric_num}>
          <Typography variant='h3' color='primary'>{hit.lyric_num}</Typography>
          <div className={classes.title}>{hit.title}</div>
          <div className={classes.lyric}>{hit.lyrics}</div>
        </div>
      ))
      }
    </>
  )
}

const CustomHits = connectHits(Hits)

export default CustomHits
