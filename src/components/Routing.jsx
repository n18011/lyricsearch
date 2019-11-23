import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Search from './Search'
import Lyric from './Lyric'
import Lyrics from './Lyrics'

export default () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/lyrics/:id' component={Lyric} />
          <Route exact path='/lyrics' component={Lyrics} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </Router>
    </>
  )
}
