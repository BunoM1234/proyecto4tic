// import React from 'react';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
//     NavLink
//   } from 'react-router-dom';
//   import Button from 'react-bootstrap/Button';
//   import Img2 from '../Novo/novo-logo.png';
//   import "bootstrap/dist/css/bootstrap.min.css";
//   import { useTable } from 'react-table';
//   import Table from 'react-bootstrap/Table';
//   import { FaFileCsv } from "react-icons/fa"




// const NovoForm = () => {
//     return (
//     <div>
//         <header className="DarkBar" id="DarkBar">
//             <Link to="/main">
//                 <img className="Imagen2"
//                     src={Img2}
//                     alt="Imagen"
//                 />
//             </Link>
//             <Link to ="/">
//                 <Button className="outBtn" variant="primary">
//                     Log Out
//                 </Button>
//             </Link>
//        </header>
// <div className="tableParts">
//     <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>NovoSpace parts</th>
//           <th>Part</th>
//           <th>Code</th>
//           <th>Quantity</th>
//           <th>Stock available</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//           <td>@mdo</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//           <td>@fat</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//           <td>@twitter</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
// </div>
// <Button className="csvBtn">
//     <span style={{margin: 10}}>Export as CSV</span>
//     <FaFileCsv />
// </Button>
//     </div>
//     )};

// export default NovoForm;

import React from "react";
// import React from 'react';
 import {
     BrowserRouter as Router,
     Routes,
     Route,
     Link,
     NavLink
   } from 'react-router-dom';
   import Button from 'react-bootstrap/Button';
   import Img2 from '../Novo/novo-logo.png';
   import "bootstrap/dist/css/bootstrap.min.css";
   import { useTable } from 'react-table';
   import Table from 'react-bootstrap/Table';
   import { FaFileCsv } from "react-icons/fa";

const Users = [
  {
    id: 1,
    selected: false,
    Board: "BC548",
    CODE: "1727-2638-1-ND",
    Quantity: "56",
    StockAvailable: "OK",
    Price: "$254"
  },
  {
    id: 1,
    selected: false,
    Board: "BC548",
    CODE: "",
    Quantity: "1-770-736-8031 x56442",
    StockAvailable: "hildegard.org",
    Price: "$254"
  },
  {
    id: 2,
    selected: false,
    Board: "BC548",
    CODE: "",
    Quantity: "1-770-736-8031 x56442",
    StockAvailable: "hildegard.org",
    Price: "$254"
  },
  {
    id: 3,
    selected: false,
    Board: "BC548",
    CODE: "",
    Quantity: "1-770-736-8031 x56442",
    StockAvailable: "hildegard.org",
    Price: "$254"
  },
  {
    id: 4,
    selected: false,
    Board: "BC548",
    CODE: "",
    Quantity: "1-770-736-8031 x56442",
    StockAvailable: "hildegard.org",
    Price: "$254"
  },
];

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
      <div className ="completeDiv2">
         <header className="DarkBar" id="DarkBar">
             <Link to="/main">
                 <img className="Imagen2"
                     src={Img2}
                     alt="Imagen"
                 />
             </Link>
             <Link to ="/">
                 <Button className="outBtn" variant="primary">
                     Log Out
                 </Button>
             </Link>
        </header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className = "tableDiv">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>
                  <th scope="col">Board</th>
                  <th scope="col">Code</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Stock avilable</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </th>
                    <td>{user.Board}</td>
                    <td>{user.CODE}</td>
                    <td>{user.Quantity}</td>
                    <td>{user.StockAvailable}</td>
                    <td>{user.Price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <Button
              variant="danger"
              className="btn btn-primary"
              onClick={() => this.getSelectedRows()}
            >
              Delete Selected Items {this.state.SelectedList.length} 
            </Button>
            <Button className="csvBtn">
               <span style={{margin: 10}}>Export as CSV</span>
              <FaFileCsv />
           </Button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SelectTableComponent;