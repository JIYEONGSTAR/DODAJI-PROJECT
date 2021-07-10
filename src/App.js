import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "components/utils/Navigation";
import Start from "pages/Start";
import Main from "pages/Main";
import Result from "pages/Result";
import Others from "pages/Others";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/main" component={Main} />
          <Route path="/result" component={Result} />
          <Route path="/others" component={Others} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
