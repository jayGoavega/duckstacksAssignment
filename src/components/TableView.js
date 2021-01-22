import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";
function TableView({ userData }) {
  const [users] = useState(userData);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(2);

  const indexOfLast = currentPage * userPerPage;
  const indexOfFirst = indexOfLast - userPerPage;
  const currentUser = users.slice(indexOfFirst, indexOfLast);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <Table responsive striped bordered hover size="md">
        <thead>
          <tr>
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
  );
}

export default TableView;
