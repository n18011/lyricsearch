import React from 'react'
import { client } from './algolia'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Configure
} from 'react-instantsearch-dom'

export default () => {
  return (
    <>
      <InstantSearch indexName='test_kina' searchClient={client}>
        <Configure hitsPerPage={8} />
        <SearchBox autoFocus submit={false} />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </>
  )
}

function Hit (props) {
  return (
    <div className='hit-price'>{props.hit.question}</div>
  )
}
