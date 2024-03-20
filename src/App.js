import './App.css'

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" components={Login} />
    <Route exact path="/" components={Home} />
    <Route components={NotFound} />
  </Switch>
)

export default App
