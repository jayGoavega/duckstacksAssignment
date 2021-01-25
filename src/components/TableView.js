import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Table } from "react-bootstrap";

export class FirstComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 3,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    var data = this.props.userData;
    var slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      orgtableData: data,
      tableData: slice,
    });
  }

  render() {
    return (
      <div>
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
              {this.state.tableData
                ? this.state.tableData.map((item, index) => {
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
        </div>
        <div className="col-md-6">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    );
  }
}

export default FirstComponents;
