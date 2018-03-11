import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'

import Layout from './layout'
import Families from './containers/families'
import Monster from './containers/monster'
import Skills from './containers/skills'
import Skill from './containers/skill'

/*
 * <Routes/>
 * ---------
 *  Contains all the routes for our app. Although this could be split into
 *  multiple files, prefer keeping as much of it as possible here, so we can see
 *  the routing for the entire app in one place.
 *
 *  For more Information on how we handle routing see React-Router's
 *  documentation:
 *
 *  https://github.com/rackt/react-router/tree/latest/docs
 */

export default function Routes ({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRedirect to="families" />
        <Route path="families(/:family)" component={Families} />
        <Route path="monster/:monster" component={Monster} />
        <Route path="skills" component={Skills} />
        <Route path="skills/:skill" component={Skill} />
      </Route>
    </Router>
  )
}
