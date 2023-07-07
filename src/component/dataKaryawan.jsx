import React from 'react';
import { Table } from 'react-bootstrap';
import Data_karyawan from '../utils/Data_karyawan';
import AddKaryawan from '../component/addKaryawan/addKaryawan';

function DataKaryawan() {
  const [karyawan] = React.useState(() => Data_karyawan());
  return (
    <div>
      <AddKaryawan />
      <br></br>
      <h1>DATA KARYAWAN</h1>
      <p>RESTO KAMPUNG BELANG</p>

      <Table striped className='scroll'>
        <thead>
          <tr>
            <th>No</th>
            <th>Id</th>
            <th>Nama Karyawan</th>
            <th>Alamat</th>
            <th>No Handphone</th>
            <th>Awal Bergabung</th>
            <th>Posisi</th>
            <th>Gaji</th>
          </tr>
        </thead>

        {karyawan.map((kar, Nomer) => {
          return (
            <tbody key={kar.id}>
              <tr>
                <td>{Nomer + 1}.</td>
                <td>{kar.id}</td>
                <td>{kar.Nama}</td>
                <td>{kar.Alamat}</td>
                <td>{kar.NoHp}</td>
                <td>{kar.AwalMasuk}</td>
                <td>{kar.Posisi}</td>
                <td>{kar.Gaji}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default DataKaryawan;
