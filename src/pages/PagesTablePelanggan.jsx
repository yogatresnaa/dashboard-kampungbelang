// import React from 'react';
// import { getForm } from '../utils/api_Data_Pelanggan';
// // import { Pelanggan } from '../utils/DataPelanggan';
// // import API_ENDPOINT from '../globals/config';
// import TablePelanggan from '../component/TablePelanggan';

// function TableCustomer() {
//   // const [customer] = React.useState(() => getForm());
//   const [customers, setCustomer] = React.useState([]);

//   React.useEffect(() => {
//     getForm().then(({ data }) => {
//       setCustomer(data);
//     });
//   }, []);

//   return (
//     <div className='dashboard'>
//       <h1>DATA CUSTOMER</h1>
//       <p>RESTO KAMPUNG BELANG</p>
//       <div className='table'>
//         <TablePelanggan customers={customers} />
//       </div>
//     </div>
//   );
// }

// export default TableCustomer;
