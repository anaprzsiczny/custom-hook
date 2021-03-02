import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutMe from './pages/aboutMe'
import Home from './pages/home'

function Routes() {

  return(
    <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/aboutme" exact component={AboutMe}/>
    </Switch>
  )
}

export default Routes