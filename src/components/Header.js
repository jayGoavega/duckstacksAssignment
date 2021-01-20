import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import linkedIcon from "../assets/linkedinLogo.png";
import twitterIcon from "../assets/twitterLogo.png";

function Header() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("role");
    history.push("/");
  };
  const role = JSON.parse(localStorage.getItem("role"));

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#0E102B" }}
      variant="dark"
    >
      <Navbar.Brand href="#home" style={{ width: "10%" }}>
        <img
          src={Logo}
          width="80"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <h6>
        <Badge variant={"success"}>{role}</Badge>
      </h6>{" "}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto pl-5">
          <Nav.Link className="h6 pr-4" href="#features">
            Trials
          </Nav.Link>
          <Nav.Link className="h6 pr-4">Users</Nav.Link>
          <Nav.Link className="h6 pr-4">Management</Nav.Link>
          <Nav.Link className="h6 pr-4">Setting</Nav.Link>
          <Nav.Link
            onClick={logout}
            as={NavLink}
            activeStyle={{}}
            to="/"
            className="h6 pr-4"
          >
            Logout
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="pr-4" href="#deets">
            <img alt="linkedin" src={linkedIcon} />
          </Nav.Link>
          <Nav.Link className="pr-4" eventKey={2} href="#memes">
            <img alt="twitter" src={twitterIcon} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
