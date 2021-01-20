import React from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  Row,
  Button,
} from "react-bootstrap";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API } from "../api";

function FormView({ close, userStatus }) {
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      fName: yup
        .string()
        .strict()
        .trim()
        .required("first name is required!")
        .min(3, "min 3 characters required!"),
      lName: yup
        .string()
        .strict()
        .trim()
        .required("last name is required!")
        .min(1, "min 3 characters required!"),
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
      const userType = userStatus.toLowerCase();
      axios
        .post(`${API}/register-${userType}`, userInputData)
        .then((res) => {
          console.log(res);
          toast.success(`${userStatus} Added Successfully !`);
          resetForm();
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        });
    },
  });

  return (
    <Container>
      <Form>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="text-center">
              <Button onClick={() => close()} variant="link">
                <AiOutlineLeftCircle
                  className="m-3"
                  color="#0E102B"
                  size={40}
                />
              </Button>
            </div>
            <h5 className="text-center p-3">New {userStatus}</h5>
            <ToastContainer autoClose={2000} />
            <FormGroup>
              <FormControl
                placeholder="First Name"
                name="fName"
                value={formik.values.fName}
                onChange={formik.handleChange}
              />
              {formik.errors.fName ? (
                <div className="text-danger">{formik.errors.fName}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Last Name"
                name="lName"
                value={formik.values.lName}
                onChange={formik.handleChange}
              />
              {formik.errors.lName ? (
                <div className="text-danger">{formik.errors.lName}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </FormGroup>
            <div className="text-center pt-3 ">
              <Button
                onClick={() => formik.handleSubmit()}
                style={{
                  backgroundColor: "#0E102B",
                  border: 0,
                  width: 150,
                  borderRadius: 20,
                }}
              >
                ADD
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default FormView;
