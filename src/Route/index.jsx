import React, { Suspense, lazy } from 'react'
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from '../components/Loading';

const Home = lazy(() => import('../page/Home'));
const Galeria = lazy(() => import('../page/Galeria'));
const Landing = lazy(() => import('../page/Landing'));

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/galeria" component={Galeria} />
        </Switch>
      </Suspense>
    </Router>
  )
}
