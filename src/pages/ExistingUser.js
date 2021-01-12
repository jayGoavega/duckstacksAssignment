import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";
import styles from "../styles/superAdmin.module.css";
import logo from "../assets/logo.png";
import linkedIcon from "../assets/linkedinLogo.png";
import twitterIcon from "../assets/twitterLogo.png";
import { Link } from "react-router-dom";

function ExistingUser() {
  return (
    <Container fluid className={styles.bg}>
      <Row className="d-flex justify-content-end">
        <img className="p-3 pr-4" src={linkedIcon} />
        <img className="p-3 pr-4" src={twitterIcon} />
      </Row>
      <Row className="justify-content-md-center">
        <Col md={3}>
          <div>
            <div className="d-flex justify-content-md-center p-2 mb-5">
              <img src={logo} width="100px" />
            </div>
            <div className={styles.card}>
              <div>
                <p className={styles.title}>| Existing User</p>
              </div>
              <Form>
                <FormGroup>
                  <FormControl
                    className={styles.inputStyle}
                    size="sm"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    className={styles.inputStyle}
                    size="sm"
                    placeholder="Password"
                  />
                </FormGroup>
              </Form>
              <Button
                as={Link}
                to="/admin"
                style={{ borderRadius: 25 }}
                className="btn btn-light btn-sm btn-block"
              >
                Login
              </Button>

              <div className="text-center">
                <Button className="m-4 btn-sm" variant="outline-secondary">
                  Forgot Password
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ExistingUser;
