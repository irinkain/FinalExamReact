import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

const Home = lazy(() => import('./pages/home/Home'))

import './App.css'

import ScrenPreloader from './components/loader/ScrenPreloader'

function App() {
  return (
    <main>
      <Suspense fallback={<ScrenPreloader />}>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </main>
  )
}

export default App
