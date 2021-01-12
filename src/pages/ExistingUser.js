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
import styles from "../styles/existingUser.module.css";
import logo from "../assets/logo.png";
import linkedIcon from "../assets/linkedinLogo.png";
import twitterIcon from "../assets/twitterLogo.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function ExistingUser() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .strict()
        .trim()
        .required("email is required!")
        .trim()
        .email("please enter correct email!"),
      password: yup
        .string()
        .strict()
        .trim()
        .min(6, "min 6 characters required!")
        .required("password is required!"),
    }),
    onSubmit: (userInputData, { resetForm }) => {
      console.log(userInputData);
      resetForm();
    },
  });
  return (
    <Container fluid className={styles.bg}>
      <Row className="d-flex justify-content-end">
        <img alt="linkedin" className="p-3 pr-4" src={linkedIcon} />
        <img alt="twitter" className="p-3 pr-4" src={twitterIcon} />
      </Row>
      <Row className="justify-content-md-center">
        <Col md={3}>
          <div>
            <div className="d-flex justify-content-md-center p-2 mb-5">
              <img alt="Duckstacks Logo" src={logo} width="100px" />
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
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div className="text-muted">{formik.errors.email}</div>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <FormControl
                    className={styles.inputStyle}
                    size="sm"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password ? (
                    <div className="text-muted">{formik.errors.password}</div>
                  ) : null}
                </FormGroup>
              </Form>
              <Button
                onClick={formik.handleSubmit}
                // as={Link}
                // to="/admin"
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
