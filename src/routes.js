import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/mainPage'
import TablePage from './pages/tablePage'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path='/view/:rows' component={TablePage} />
    </Switch>
  )
}

export default Routes
