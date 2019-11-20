import React, { useState, useEffect } from 'react'

import { client } from '../algolia'

const index = client.initIndex('psalm')

export default ({ match }) => {
  const [lyric, setLyric] = useState({})

  useEffect(() => {
    index.getObject(match.params.id, (err, content) => {
      console.log(content)
      setLyric(content)
    })
  }, [match.params.id])

  return (
    <>
    Hello, Lyric page!
      {lyric ? JSON.stringify(lyric) : ''}
    </>
  )
}
