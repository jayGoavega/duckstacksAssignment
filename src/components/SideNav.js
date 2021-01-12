import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import styles from "../styles/sideNav.module.css";
import {
  AiOutlineRightCircle,
  AiOutlineCloseCircle,
  AiOutlineBars,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold",
  color: "white",
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
                <AiOutlineCloseCircle size={40} color="white" />
              </Button>
            </div>
            <ListGroup.Item
              as={NavLink}
              to="/admin"
              activeStyle={activeStyle}
              className={styles.listGroup}
            >
              Admin
            </ListGroup.Item>
            <ListGroup.Item
              as={NavLink}
              to="/sponsor"
              activeStyle={activeStyle}
              className={styles.listGroup}
            >
              Sponsor
            </ListGroup.Item>
            <ListGroup.Item
              as={NavLink}
              to="/doctor"
              activeStyle={activeStyle}
              className={styles.listGroup}
            >
              Doctor
            </ListGroup.Item>
            <ListGroup.Item
              as={NavLink}
              to="/consultant"
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
