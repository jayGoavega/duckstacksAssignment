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

function Sponsor() {
  const [form, setForm] = useState(false);
  const [allSponsorUser, setAllSponsorUser] = useState([]);
  const token = localStorage.getItem("auth");

  const close = () => {
    setForm(false);
    getSponsor();
  };

  const getSponsor = () => {
    axios
      .get(`${API}get-sponsor`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setAllSponsorUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getSponsor();
  }, []);

  return (
    <div>
      <Header userStatus={"Sponsor"} statusColor={"warning"} />
      <SideNav />
      {form ? (
        <FormView userStatus={"Sponsor"} close={close} />
      ) : (
        <Container className={styles.box}>
          <Row className="justify-content-between align-items-center p-2 pt-5">
            <div className="d-flex align-items-center">
              <AiOutlineUser size={35} />
              <h5 className="pl-3"> SPONSOR</h5>
              <FormControl className="ml-5 w-50" placeholder="search" />
            </div>
            <div>
              <Button
                onClick={() => {
                  setForm(true);
                }}
                style={{ backgroundColor: "#42B3E3", border: 0 }}
              >
                Add Sponsor
              </Button>
            </div>
          </Row>
          <Row>
            <Col className="pt-5">
              <TableView userData={allSponsorUser} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Sponsor;
