import React from "react";

const PaginationView = ({ userPerPage, totalUser, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUser / userPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li className="page-item" key={number}>
            <a onClick={()=>paginate(number)}  className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationView;
