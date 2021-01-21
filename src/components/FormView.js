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
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { API } from "../config/api";
import { RegisterUserSchema, InitialValues } from "../validators/RegisterUser";

function FormView({ close, userStatus }) {
  const role = JSON.parse(localStorage.getItem("role"));

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: RegisterUserSchema,
    //registering users
    onSubmit: async (userInputData, { resetForm }) => {
      const userType = userStatus.toLowerCase();
      try {
        const x = await axios.post(`${API}register-${userType}`, {
          ...userInputData,
          createdBy: role,
        });
        resetForm();
        console.log(x);
        toast.success(`${userStatus} Added Successfully !`);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });
  const { errors, values, handleChange, handleSubmit } = formik;
  // Validation-View
  const Validation = ({ errors }) => (
    <div className="text-danger">{errors}</div>
  );

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
            {/* toaster */}
            <ToastContainer autoClose={2000} />
            <FormGroup>
              <FormControl
                placeholder="First Name"
                name="fName"
                value={values.fName}
                onChange={handleChange}
              />
              {errors.fName ? <Validation errors={errors.fName} /> : null}
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Last Name"
                name="lName"
                value={values.lName}
                onChange={handleChange}
              />
              {errors.lName ? <Validation errors={errors.lName} /> : null}
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email ? <Validation errors={errors.email} /> : null}
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password ? <Validation errors={errors.password} /> : null}
            </FormGroup>
            <div className="text-center pt-3 ">
              <Button
                variant="success"
                className="btn btn-block"
                onClick={() => handleSubmit()}
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
