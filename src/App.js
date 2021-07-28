import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "pages/Start";
import Main from "pages/Main";
import Result from "pages/Result";
import Others from "pages/Others";
import ResultOnly from "pages/ResultOnly";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/main" component={Main} />
          <Route path="/result" component={Result} />
          <Route path="/resultD/:resultD" component={ResultOnly} />
          <Route path="/others" component={Others} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
