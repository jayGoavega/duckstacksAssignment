import React, { useState } from "react";
import { Col, Container, Row, Button, FormControl } from "react-bootstrap";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import styles from "../styles/admin.module.css";
import TableView from "../components/TableView";
import { AiOutlineUser } from "react-icons/ai";
import FormView from "../components/FormView";
function Doctor() {
  const [form, setForm] = useState(false);

  const close = () => {
    setForm(false);
  };
  return (
    <div>
      <Header userStatus={"Doctor"} statusColor={'info'}/>
      <SideNav />
      {form ? (
        <FormView userStatus={"Doctor"} close={close} />
      ) : (
        <Container className={styles.box}>
          <Row className="justify-content-between align-items-center p-2 pt-5">
            <div className="d-flex align-items-center">
              <AiOutlineUser size={35} />
              <h5 className="pl-3"> DOCTOR</h5>
              <FormControl className="ml-5 w-50" placeholder="search" />
            </div>
            <div>
              <Button
                onClick={() => {
                  setForm(true);
                }}
                style={{ backgroundColor: "#42B3E3", border: 0 }}
              >
                Add Doctor
              </Button>
            </div>
          </Row>
          <Row>
            <Col className="pt-5">
              <TableView />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Doctor;
