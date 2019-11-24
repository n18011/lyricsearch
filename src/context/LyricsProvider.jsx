import React, { createContext, useState, useEffect } from 'react'

import { client } from '../algolia'

const LyricsContext = createContext()

const LyricsProvider = ({ children }) => {
  const [lyrics, setLyrics] = useState([])
  const [value, setValue] = useState('')
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const index = client.initIndex('psalm')
    index.search({
      query: value,
      hitsPerPage: 100,
      attributesToRetrieve: ['lyric_num', 'title', 'lyrics'],
    },
      (err, { hits } = {}) => {
        if (err) throw err;

        setLyrics(hits)
      }
    )
  }, [value])


  return (
    <LyricsContext.Provider value={{ lyrics, setValue, isShow, setIsShow }}>
      {children}
    </LyricsContext.Provider>
  )
}


export { LyricsContext, LyricsProvider }