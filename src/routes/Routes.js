import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExistingUser from "../pages/ExistingUser";
import Admin from "../pages/Admin";
import Sponsor from "../pages/Sponsor";
import Doctor from "../pages/Doctor";
import Consultant from "../pages/Consultant";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={ExistingUser} />
          <Route path="/admin" component={Admin} />
          <Route path="/sponsor" component={Sponsor} />
          <Route path="/doctor" component={Doctor} />
          <Route path="/consultant" component={Consultant} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
