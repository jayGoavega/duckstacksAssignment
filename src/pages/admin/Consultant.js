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

function Consultant() {
  const [form, setForm] = useState(false);
  const [allConsultantUser, setAllconsultantUser] = useState([]);
  const token = localStorage.getItem("auth");

  const close = () => {
    setForm(false);
    getConsultant();
  };

  const getConsultant = () => {
    axios
      .get(`${API}get-consultant`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setAllconsultantUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getConsultant();
  }, []);
  return (
    <div>
      <Header userStatus={"Consultant"} statusColor={"secondary"} />
      <SideNav />
      {form ? (
        <FormView userStatus={"Consultant"} close={close} />
      ) : (
        <Container className={styles.box}>
          <Row className="justify-content-between align-items-center p-2 pt-5">
            <div className="d-flex align-items-center">
              <AiOutlineUser size={35} />
              <h5 className="pl-3"> CONSULTANT</h5>
              <FormControl className="ml-5 w-50" placeholder="search" />
            </div>
            <div>
              <Button
                onClick={() => {
                  setForm(true);
                }}
                style={{ backgroundColor: "#42B3E3", border: 0 }}
              >
                Add Consultant
              </Button>
            </div>
          </Row>
          <Row>
            <Col className="pt-5">
              <TableView userData={allConsultantUser} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Consultant;