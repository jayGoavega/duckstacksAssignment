import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Pagination from "./Pagination";

function TableView({ userData }) {
  const [users] = useState(userData);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);


  const indexOfLast = currentPage * userPerPage;
  const indexOfFirst = indexOfLast - userPerPage;
  const currentUser = users.slice(indexOfFirst, indexOfLast);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <div>
            <Table striped bordered hover size="md">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {currentUser
                  ? currentUser.map((item, index) => {
                      const { fullName, email, role } = item;
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{fullName}</td>
                          <td>{email}</td>
                          <td>{role}</td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Pagination
                userPerPage={userPerPage}
                totalUser={users.length}
                paginate={paginate}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TableView;
