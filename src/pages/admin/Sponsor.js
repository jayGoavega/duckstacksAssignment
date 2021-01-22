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

function Sponsor() {
  const [form, setForm] = useState(false);
  const [allSponsorUser, setAllSponsorUser] = useState([]);

  //getting all sponsor data's
  const getSponsor = async () => {
    //user based api request
    const role = JSON.parse(localStorage.getItem("role"));
    let PATH = "";
    if (role === "sponsor") {
      PATH = "sponsor-created-sponsor";
    } else {
      PATH = "get-sponsor";
    }
    //helper-common-function
    const res = await getAllRoleData(PATH);
    if (res.error !== "error") {
      setAllSponsorUser(res);
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    getSponsor();
  }, []);

  const close = () => {
    setForm(false);
    getSponsor();
  };

  return (
    <div>
      <Header />
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
            <ToastContainer autoClose={2000} />
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
          <Row className="justify-content-center pt-5">
            <Col md={7}>
              {allSponsorUser.length >= 1 ? (
                <TableView userData={allSponsorUser} />
              ) : null}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Sponsor;
