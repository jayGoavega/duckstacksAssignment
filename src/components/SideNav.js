import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import styles from "../styles/sideNav.module.css";
import { AiOutlineCloseCircle, AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold",
  color: "#ffffff",
  border: 0,
  paddingTop: 40,
};

function SideNav() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "200px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
  };

  const role = JSON.parse(localStorage.getItem("role"));

  return (
    <div>
      <div className={styles.hambur}>
        <Button variant="link" onClick={() => openNav()}>
          <AiOutlineBars size={30} color=" green" />
        </Button>
      </div>
      <div id="mySidenav" className={styles.container}>
        <div>
          <ListGroup style={{ display: "block" }}>
            <div className="text-center">
              <Button variant="link" onClick={() => closeNav()}>
                <AiOutlineCloseCircle size={40} color="#ffffff" />
              </Button>
            </div>
            {role === "sponsor" ? null : (
              <ListGroup.Item
                as={NavLink}
                to={`/${role}/admin`}
                activeStyle={activeStyle}
                className={styles.listGroup}
              >
                Admin
              </ListGroup.Item>
            )}

            {role === "sponsor" ? (
              <ListGroup.Item
                as={NavLink}
                to={`/${role}/sponsor`}
                activeStyle={activeStyle}
                className={styles.listGroup}
              >
                Sponsor
              </ListGroup.Item>
            ) : (
              <ListGroup.Item
                as={NavLink}
                to={`/${role}/sponsor`}
                activeStyle={activeStyle}
                className={styles.listGroup}
              >
                Sponsor
              </ListGroup.Item>
            )}

            <ListGroup.Item
              as={NavLink}
              to={`/${role}/doctor`}
              activeStyle={activeStyle}
              className={styles.listGroup}
            >
              Doctor
            </ListGroup.Item>
            <ListGroup.Item
              as={NavLink}
              to={`/${role}/consultant`}
              activeStyle={activeStyle}
              className={styles.listGroup}
            >
              Consultant
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
