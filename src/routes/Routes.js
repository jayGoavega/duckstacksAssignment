import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ExistingUser from "../pages/ExistingUser";
import Admin from "../pages/admin/Admin";
import Sponsor from "../pages/admin/Sponsor";
import Doctor from "../pages/admin/Doctor";
import Consultant from "../pages/admin/Consultant";
import {
  InitilaRoute,
  AdminRoute,
  SponsorRoute,
  DoctorRoute,
  ConsultantRoute,
} from "./Protected";
import DoctorUser from "../pages/users/doctor";
import ConsultantUser from "../pages/users/consultent";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <InitilaRoute exact path="/" component={ExistingUser} />
          <AdminRoute exact path="/admin/admin" component={Admin} />
          <AdminRoute exact path="/admin/sponsor" component={Sponsor} />
          <AdminRoute exact path="/admin/doctor" component={Doctor} />
          <AdminRoute exact path="/admin/consultant" component={Consultant} />

          <SponsorRoute exact path="/sponsor/sponsor" component={Sponsor} />
          <SponsorRoute exact path="/sponsor/doctor" component={Doctor} />
          <SponsorRoute
            exact
            path="/sponsor/consultant"
            component={Consultant}
          />

          <DoctorRoute exact path="/doctor/doctor" component={DoctorUser} />
          <ConsultantRoute
            exact
            path="/consultant/consultant"
            component={ConsultantUser}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
