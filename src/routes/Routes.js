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
          <Protected exact path="/" user="admin" component={Admin} />
          <Route path="/existing" exact component={ExistingUser} />
          {/* admin routes */}
          <Protected path="/admin" user="admin" component={Admin} />
          <Protected
            path="/sponsor-admin"
            user="admin"
            component={SponsorAdmin}
          />
          <Protected
            path="/doctor-admin"
            user="admin"
            component={DoctorAdmin}
          />
          <Protected
            path="/consultant-admin"
            user="admin"
            component={ConsultantAdmin}
          />
          {/* users route */}
          <Protected path="/sponsor" user="sponsor" component={SponsorAdmin} />
          <Protected path="/doctor" user="doctor" component={Doctor} />
          <Protected
            path="/consultant"
            user="consultant"
            component={Consultant}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
