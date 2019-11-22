import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { client } from '../algolia'

const index = client.initIndex('psalm')

const useStyles = makeStyles(theme => ({
  div: {
    height: '1000px',
    backgroundColor: '#ccc'

    /*
    margin: '0',
    padding: '10px',
    height: '200px',
    */
  }
}))

export default ({ match }) => {
  const classes = useStyles()
  const [lyric, setLyric] = useState({})

  useEffect(() => {
    index.getObject(match.params.id, (err, content) => {
      if (err) {
        console.log('error => ', err)
      }
      console.log(content)
      setLyric(content)
    })
  }, [match.params.id])

  return (
    <>
      <div className={classes.div}>
    Hello, Lyric page!
        {lyric ? JSON.stringify(lyric) : ''}
      </div>
    </>
  )
}
