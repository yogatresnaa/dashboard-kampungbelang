import React from 'react';
import Table from 'react-bootstrap/Table';
import CONFIG from '../globals/config';
// import API_ENDPOINT from '../globals/api_endpoint';

function TablePelanggan() {
  const [customers, setCustomers] = React.useState([]);
  // const [isLoding, setLoading] = React.useState(false);
  React.useEffect(() => {
    // setLoading(true);
    // menggunakan async Await
    const fetchData = async () => {
      try {
        const response = await fetch(`${CONFIG.BASE_URL}datacustomer`);
        const responseJson = await response.json();
        setCustomers(responseJson.data.customers);
        console.log(responseJson);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    // menggunakan then
    // fetch(`${CONFIG.BASE_URL}datacustomer`)
    //   .then((response) => response.json())
    //   .then((responJson) => {
    //     setCustomers(responJson.data.customers);
    //     // setLoading(false);
    //   });
  }, []);

  return (
    <div className='table-pelanggan'>
      <h1>DATA CUSTOMER</h1>
      <p>RESTO KAMPUNG BELANG</p>
      <Table striped className='scroll'>
        <thead>
          <tr>
            <th>No</th>
            <th>Id</th>
            <th>Nama Pelanggan</th>
            <th>No Telp</th>
            <th>email</th>
            <th>Subjek</th>
            <th>Pesan</th>
            <th>createdAt</th>
          </tr>
        </thead>

        {customers.map((customer, Nomer) => {
          return (
            <tbody key={customer.id}>
              {/* {isLoding ? 'loading' : null} */}
              <tr>
                <td>{Nomer + 1}.</td>
                <td>{customer.id}</td>
                <td>{customer.nama}</td>
                <td>{customer.noHp}</td>
                <td>{customer.email}</td>
                <td>{customer.subjek}</td>
                <td>{customer.pesan}</td>
                <td>{customer.createdAt}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default TablePelanggan;
