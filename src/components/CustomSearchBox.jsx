import React from 'react'

import {
  connectSearchBox
} from 'react-instantsearch-dom'

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <>
    <input
      type='search'
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
    {isSearchStalled ? '検索中' : ''}
  </>
)

const CustomSearchBox = connectSearchBox(SearchBox)
export default CustomSearchBox
