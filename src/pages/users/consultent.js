import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../../components/Header";
import axios from "axios";
import { API } from "../../api";

function Consultant() {
  const [consultantProfile, setConsultantProfile] = useState();

  useEffect(() => {
    const token = localStorage.getItem("auth");
    axios
      .get(`${API}consultant-profile`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setConsultantProfile([res.data]);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="pt-5">
            {consultantProfile &&
              consultantProfile.map((item, index) => {
                console.log(item);
                return (
                  <Card key={index}>
                    <Card.Body>
                      <h3 className='pt-2 pb-4 text-success'>Welcome consultant</h3>
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

export default Consultant;
