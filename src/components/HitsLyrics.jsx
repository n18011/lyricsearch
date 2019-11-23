import React, {useContext} from 'react'

import {LyricsContext} from '../context/LyricsProvider'

export default () => {
    const {hits} = useContext(LyricsContext)

    return(
        <>
        {hits.map(hit => (
            <p>{hit.title}</p>
        ))}
        </>
    )
}