import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../../components/Header";
import axios from "axios";
import { API } from "../../config/api";
import { ToastContainer, toast } from "react-toastify";

function Doctor() {
  const [doctorProfile, setDoctorProfile] = useState();

  const getDoctorProfile = async () => {
    const token = localStorage.getItem("auth");
    try {
      const res = await axios.get(`${API}doctor-profile`, {
        headers: { Authorization: token },
      });
      setDoctorProfile([res.data]);
    } catch (error) {
      toast.error(error.response.statusText);
    }
  };

  useEffect(() => {
    getDoctorProfile();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <ToastContainer autoClose={1000} />
          <Col md={{ span: 4, offset: 4 }} className="pt-5">
            {doctorProfile &&
              doctorProfile.map((item, index) => {
                return (
                  <Card key={index}>
                    <Card.Body>
                      <h3 className="pt-2 pb-4 text-success">Welcome Doctor</h3>
                      <Card.Title>Name : {item.fullName}</Card.Title>
                      <Card.Title>Email : {item.email}</Card.Title>
                      <Card.Title>Role : {item.role}</Card.Title>
                    </Card.Body>
                  </Card>
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Doctor;
