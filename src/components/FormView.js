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

function FormView({ close }) {
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
            <h5 className="text-center p-3">NEW ADMINISTRATORS</h5>
            <FormGroup>
              <FormControl placeholder="First Name" />
            </FormGroup>
            <FormGroup>
              <FormControl placeholder="Last Name" />
            </FormGroup>
            <FormGroup>
              <FormControl placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <FormControl placeholder="Password" />
            </FormGroup>
            <div className="text-center pt-3 ">
              <Button
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
