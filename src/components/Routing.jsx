import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Search from './Search'
import Lyric from './Lyric'

export default () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/lyrics/:id' component={Lyric} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </Router>
    </>
  )
}
