import React from 'react';
import { Table } from 'react-bootstrap';
import CONFIG from '../globals/config';
import Modal from 'react-modal';
import EditDataKaryawan from './editKaryawan/editDataKaryawan';
import { useParams } from 'react-router-dom';

function DataKaryawan() {
  const [karyawan, setKaryawan] = React.useState([]);
  const { entityId } = useParams();

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${CONFIG.BASE_URL}karyawan`);
        const responsJson = await response.json();
        setKaryawan(responsJson.data.karyawan);
        console.log(responsJson);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
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
            <th>Aksi</th>
          </tr>
        </thead>

        {karyawan.map((kar, Nomer) => {
          return (
            <tbody key={kar.id}>
              <tr>
                <td>{Nomer + 1}.</td>
                <td>{kar.id}</td>
                <td>{kar.nama}</td>
                <td>{kar.alamat}</td>
                <td>{kar.noHp}</td>
                <td>{kar.awalmasuk}</td>
                <td>{kar.posisi}</td>
                <td>{kar.gaji}</td>
                <td>
                  <div>
                    <button style={{ color: 'white', backgroundColor: 'green' }} onClick={openModal}>
                      Edit
                      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Form Edit Data'>
                        <EditDataKaryawan entityId={entityId} closeModal={closeModal} />
                      </Modal>
                    </button>
                  </div>

                  <button style={{ color: 'white', backgroundColor: 'red' }}>Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default DataKaryawan;
