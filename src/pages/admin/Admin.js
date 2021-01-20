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
import { ToastContainer, toast } from "react-toastify";

function Admin() {
  const [form, setForm] = useState(false);
  const [allAdminUser, setAllAdminUser] = useState([]);
  const token = localStorage.getItem("auth");
  
  const close = () => {
    getAdmin();
    setForm(false);
  };

  const getAdmin = () => {
    axios
      .get(`${API}get-admin`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
        setAllAdminUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Header userStatus={"Admin"} statusColor={"success"} />
      <SideNav />
      {form ? (
        <FormView userStatus={"Admin"} close={close} />
      ) : (
        <Container className={styles.box}>
          <Row className="justify-content-between align-items-center p-2 pt-5">
            <div className="d-flex align-items-center">
              <AiOutlineUser size={35} />
              <h5 className="pl-3"> ADMINISTRATORS</h5>
              <FormControl className="ml-5 w-50" placeholder="search" />
            </div>
            <div>
              <Button
                onClick={() => {
                  setForm(true);
                }}
                style={{ backgroundColor: "#42B3E3", border: 0 }}
              >
                Add Admin
              </Button>
            </div>
          </Row>
          <Row>
            <Col className="pt-5">
              <TableView userData={allAdminUser} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Admin;
