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
   //import Table from 'react-bootstrap/Table';
   import { FaFileCsv } from "react-icons/fa";
   import MaterialTable from 'material-table';
   import tableIcons from '../tableIcons/tableIcons';
   import HeaderBar from "../NavBar/NBHeader";
   



   const NovoBuy = () => {
  
    return (
      <div className ="completeDiv2">
         <HeaderBar className="navBar"/>
            <div className="NovoTableDiv">
              <MaterialTable 
                className = "NovoTable"
                title="Parts table"
                icons={tableIcons}
                columns={[
                    { title: "Board", field: "board"},
                    { title: "Code", field: "code"},
                    { title: "Quantity", field: "quantity", type: "numeric"},
                    { title: "Stock", field: "stock"},
                    { title: "Price", field: "price", type: "numeric"},
                ]}
                data={[
                    { board: 'PCB_B', code: '12356', quantity: 4, stock: 'No', price: 40 },
                    { board: 'PCB_A', code: '123', quantity: 3, stock: 'Yes', price: 35 },
                ]}
                options={{
                    exportButton: true,
                    selection: true,
                    headerStyle: {
                        backgroundColor: '#EEE',
                    actionsColumnIndex: -1,
                }}}
                actions={[
                  rowData => ({
                    icon: 'Delete',
                    tooltip: 'Delete User',
                    onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name),
                    disabled: rowData.birthYear < 2000
                  })
                ]}
              />
              </div>
              
        </div>
    
    );
};

export default NovoBuy;