import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExistingUser from "../pages/ExistingUser";
import Admin from "../pages/admin/Admin";
import SponsorAdmin from "../pages/admin/Sponsor";
import DoctorAdmin from "../pages/admin/Doctor";
import ConsultantAdmin from "../pages/admin/Consultant";
import { Protected } from "./Protected";
import Doctor from "../pages/users/doctor";
import Consultant from "../pages/users/consultent";
function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Protected path="/" exact component={ExistingUser} />
          <Route path="/existing" exact component={ExistingUser} />
          {/* admin routes */}
          <Protected path="/admin" exact user="admin" component={Admin} />
          <Protected
            path="/sponsor-admin"
            exact
            user="admin"
            component={SponsorAdmin}
          />
          <Protected
            path="/doctor-admin"
            exact
            user="admin"
            component={DoctorAdmin}
          />
          <Protected
            path="/consultant-admin"
            exact
            user="admin"
            component={ConsultantAdmin}
          />
          {/* users route */}
          <Protected
            path="/sponsor"
            exact
            user="admin"
            component={SponsorAdmin}
          />
          <Protected path="/doctor" exact user="doctor" component={Doctor} />
          <Protected
            path="/consultant"
            exact
            user="consultant"
            component={Consultant}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
