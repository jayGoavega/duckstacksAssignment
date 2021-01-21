import React from "react";
import { Route, Redirect } from "react-router-dom";

export const Protected = ({ component, user, ...rest }) => {
  const RenderComponent = component;
  const token = localStorage.getItem("auth");
  const role = JSON.parse(localStorage.getItem("role"));

  return (
    <Route
      {...rest}
      render={(props) =>
         token !== null && role === user ? (
          <RenderComponent {...props} />
        ) : token && token !== null && role === role ? (
          <Redirect to={{ pathname: `/${role}` }} />
        ) : (
          <Redirect to={{ pathname: "/existing" }} />
        )
      }
    />
  );
};
