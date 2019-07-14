import React from 'react'
import { Redirect } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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

export default function Routes () {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/families/" />
          <Route exact path="/families/:family?" component={Families} />
          <Route exact path="/monster/:monster" component={Monster} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/skills/:skill" component={Skill} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
