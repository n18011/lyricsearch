import React from 'react'

import { LyricsProvider } from '../context/LyricsProvider'
import HitsLyrics from './HitsLyrics'

export default () => {
  return (
    <>
      <LyricsProvider>
        <HitsLyrics></HitsLyrics>
      </LyricsProvider>
    </>
  )
}