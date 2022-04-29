import React , { Fragment } from "react";
import { Route, Switch } from "react-router-dom"
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import Study from "./Study/Study"

function Layout() {
  return (
    <Fragment>
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path={`/decks/:deckId/study`}>
            <Study />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Fragment>
  )
}

export default Layout;
