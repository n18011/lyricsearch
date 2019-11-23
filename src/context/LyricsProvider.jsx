import React, {createContext, useState, useEffect} from 'react'

import { connectHits } from 'react-instantsearch-dom'

const LyricsContext = createContext()

const LyricsProvider = ({children, hits}) => {
    const [lyrics, setLyrics] = useState(['test', 'test2'])
    return(
        <LyricsContext.Provider value={{lyrics, hits}}>
            {children}
        </LyricsContext.Provider>
    )
}

const CustomHitsProvider = connectHits(LyricsProvider)

export {LyricsContext, CustomHitsProvider}