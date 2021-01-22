import React from "react";
import { Route, Redirect } from "react-router-dom";

export const InitilaRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("auth");
  const role = JSON.parse(localStorage.getItem("role"));
  return (
    <Route
      {...rest}
      render={(props) =>
        !token && token === null ? (
          <Component {...props} />
        ) : token && token !== null && role === role ? (
          <Redirect to={{ pathname: `/${role}/${role}` }} />
        ) : token && token !== null && role === role ? (
          <Redirect to={{ pathname: `/${role}/${role}` }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export const AdminRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("auth");
  const role = JSON.parse(localStorage.getItem("role"));
  return (
    <Route
      {...rest}
      render={(props) =>
        token && token !== null && role === "admin" ? (
          <Component {...props} />
        ) : token && token !== null && role === role ? (
          <Redirect to={{ pathname: `/${role}/${role}` }} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export const SponsorRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("auth");
  const role = JSON.parse(localStorage.getItem("role"));
  return (
    <Route
      {...rest}
      render={(props) =>
        token && token !== null && role === "sponsor" ? (
          <Component {...props} />
        ) : token && token !== null && role === role ? (
          <Redirect to={{ pathname: `/${role}/${role}` }} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export const DoctorRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("auth");
  const role = JSON.parse(localStorage.getItem("role"));
  return (
    <Route
      {...rest}
      render={(props) =>
        token && token !== null && role === "doctor" ? (
          <Component {...props} />
        ) : token && token !== null && role === role ? (
          <Redirect to={{ pathname: `/${role}/${role}` }} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export const ConsultantRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("auth");
  const role = JSON.parse(localStorage.getItem("role"));
  return (
    <Route
      {...rest}
      render={(props) =>
        token && token !== null && role === "consultant" ? (
          <Component {...props} />
        ) : token && token !== null && role === role ? (
          <Redirect to={{ pathname: `/${role}/${role}` }} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};
