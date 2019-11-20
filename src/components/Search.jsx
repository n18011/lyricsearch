import React from 'react'
import { client } from '../algolia'
import {
  InstantSearch,
  Pagination,
  Configure
} from 'react-instantsearch-dom'

import CustomHits from './CustomHits'
import CustomSearchBox from './CustomSearchBox'

export default () => {
  return (
    <>
      <InstantSearch indexName='psalm' searchClient={client}>
        <Configure hitsPerPage={815} />
        <CustomSearchBox />
        <CustomHits />
        <Pagination />
      </InstantSearch>
    </>
  )
}
