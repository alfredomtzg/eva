import React, { Suspense, lazy } from 'react'
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from '../components/Loading';

const Home = lazy(() => import('../page/Home'));

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  )
}
