import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, FormControl } from "react-bootstrap";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import styles from "../../styles/admin.module.css";
import TableView from "../../components/TableView";
import { AiOutlineUser } from "react-icons/ai";
import FormView from "../../components/FormView";
import axios from "axios";
import { API } from "../../api";

function Doctor() {
  const [form, setForm] = useState(false);
  const [allDoctorUser, setAllDoctorUser] = useState([]);
  const token = localStorage.getItem("auth");
  const role = localStorage.getItem("role");

  const close = () => {
    setForm(false);
    getDoctor();
  };

  const getDoctor = () => {
    axios
      .get(`${API}get-doctor`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setAllDoctorUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <div>
      <Header />
      <div>
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
                <TableView userData={allDoctorUser} />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

export default Doctor;
