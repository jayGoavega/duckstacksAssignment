import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, FormControl } from "react-bootstrap";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import styles from "../../styles/admin.module.css";
import TableView from "../../components/TableView";
import { AiOutlineUser } from "react-icons/ai";
import FormView from "../../components/FormView";
import { getAllRoleData } from "../helper/getAllRoleData";
import { ToastContainer, toast } from "react-toastify";

function Doctor() {
  const [form, setForm] = useState(false);
  const [allDoctorUser, setAllDoctorUser] = useState([]);

  //getting all Doctor data's
  const getDoctor = async () => {
    //user based api request
    const role = JSON.parse(localStorage.getItem("role"));
    let PATH = "";
    if (role === "sponsor") {
      PATH = "sponsor-created-doctor";
    } else {
      PATH = "get-doctor";
    }
    //helper-common-function
    const res = await getAllRoleData(PATH);
    if (res.error !== "error") {
      setAllDoctorUser(res);
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  const close = async () => {
    await getDoctor();
    setForm(false);
  };

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
              <ToastContainer autoClose={2000} />
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
            <Row className="justify-content-center pt-5">
              <Col md={7}>
                {allDoctorUser.length >= 1 ? (
                  <TableView userData={allDoctorUser} />
                ) : (
                  <div className="text-center text-danger">
                    <h5>not record found !</h5>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

export default Doctor;
