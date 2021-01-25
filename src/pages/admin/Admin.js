import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, FormControl } from "react-bootstrap";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import styles from "../../styles/admin.module.css";
import TableView from "../../components/TableView";
import { AiOutlineUser } from "react-icons/ai";
import FormView from "../../components/FormView";
import { ToastContainer, toast } from "react-toastify";
import { getAllRoleData } from "../helper/getAllRoleData";

function Admin() {
  const [form, setForm] = useState(false);
  const [allAdminUser, setAllAdminUser] = useState([]);

  //getting all admin data's
  const getAdmin = async () => {
    //helper-common-function
    const res = await getAllRoleData("get-admin");
    if (res.error !== "error") {
      setAllAdminUser(res);
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  //formViewSwitch
  const close = async () => {
    await getAdmin();
    setForm(false);
  };

  return (
    <div>
      <Header />
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
            <ToastContainer autoClose={2000} />
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
          <Row className="justify-content-center pt-5">
            <Col md={7}>
              {allAdminUser.length >= 1 ? (
                <TableView userData={allAdminUser} />
              ) :   (
                <div className='text-center text-danger'>
                  <h5>not record found !</h5>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Admin;
