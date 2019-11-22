import React from 'react'

import {
  connectSearchBox
} from 'react-instantsearch-dom'

import {
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  search: {
    height: '100vh',
    backgroundColor: theme.palette.common.black
  }
}))

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  const classes = useStyles()
  return (
  <>
    <input
      type='search'
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
    {isSearchStalled ? <Typography className={classes.search}>検索中</Typography> : ''}
  </>
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)
export default CustomSearchBox
