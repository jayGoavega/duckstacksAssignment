import React, { useEffect } from "react";
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
import { useFormik } from "formik";
import { API } from "../config/api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ExistingUserSchema, InitialValues } from "../validators/ExistingUsers";
import { addRootAdmin, RedirectTo } from "./helper/RootAdmin";

function ExistingUser(props) {
  useEffect(() => {
    addRootAdmin();
  }, []);

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: ExistingUserSchema,

    onSubmit: (userInputData, { resetForm }) => {
      axios
        .post(`${API}login-common`, userInputData)
        .then((res) => {
          RedirectTo(res,props);
          resetForm();
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        });
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;
  //validation-view
  const Validation = ({ errors }) => (
    <div className="text-warning">{errors}</div>
  );

  return (
    <Container fluid className={styles.bg}>
      <Row className="d-flex justify-content-end">
        <img alt="linkedin" className="p-3 pr-4" src={linkedIcon} />
        <img alt="twitter" className="p-3 pr-4" src={twitterIcon} />
      </Row>
      <ToastContainer autoClose={2000} />
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
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email ? <Validation errors={errors.email} /> : null}
                </FormGroup>
                <FormGroup>
                  <FormControl
                    className={styles.inputStyle}
                    size="sm"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password ? (
                    <Validation errors={errors.password} />
                  ) : null}
                </FormGroup>
              </Form>
              <Button
                onClick={handleSubmit}
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
