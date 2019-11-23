import React, {useState, useEffect, useContext} from 'react'
import { client } from '../algolia'
import {
  InstantSearch,
  Pagination,
  Configure
} from 'react-instantsearch-dom'

import {CustomHitsProvider} from '../context/LyricsProvider'
import HitsLyrics from './HitsLyrics'
import CustomSearchBox from './CustomSearchBox'

export default () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('44')

  useEffect(() => {
    const index = client.initIndex('psalm')
    index.search({
      query: value,
      hitsPerPage: 50,
      attributesToRetrieve: ['lyric_num', 'title', 'lyrics'],
      },
      (err, { hits } = {}) => {
        if (err) throw err;
    
        setData(hits)
      }
    );
  }, [value])
  /*
    return(
        <>
      <InstantSearch indexName='psalm' searchClient={client}>
        <Configure hitsPerPage={815} />
        <CustomSearchBox />
        <CustomHitsProvider>
            <HitsLyrics></HitsLyrics>
        </CustomHitsProvider>
        <Pagination />
      </InstantSearch>
            </>
    )
    */
   return (
     <>
     <input type="text" 
     onChange={(e) => setValue(e.target.value)}
     />
     {data.map(d => (
       <p>{d.lyric_num}</p>
     ))}
     </>
   )
}