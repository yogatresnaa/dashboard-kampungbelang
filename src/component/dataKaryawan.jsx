import React from 'react';
import { Table } from 'react-bootstrap';
import CONFIG from '../globals/config';
import Modal from 'react-modal';
import EditDataKaryawan from './editKaryawan/editDataKaryawan';

function DataKaryawan() {
  const [karyawan, setKaryawan] = React.useState([]);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [currentKaryawanId, setCurrentKaryawanId] = React.useState(null);

  const openModal = (id) => {
    setCurrentKaryawanId(id);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentKaryawanId(null);
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

  const deleteKaryawan = async (id) => {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}karyawan/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Data Karyawan Gagal dihapus');
      }
      setKaryawan(karyawan.filter((kar) => kar.id !== id));
      console.log('Data berhasil dihapus');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Yakin mau dihapus?');
    if (isConfirmed) {
      deleteKaryawan(id);
    }
  };

  const currentKaryawan = karyawan.find((kar) => kar.id === currentKaryawanId);

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
                    <button style={{ color: 'white', backgroundColor: 'green' }} onClick={() => openModal(kar.id)}>
                      Edit
                    </button>
                  </div>
                  <button onClick={() => handleDelete(kar.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Form Edit Data'>
        {currentKaryawan && <EditDataKaryawan entityId={currentKaryawanId} closeModal={closeModal} karyawan={currentKaryawan} />}
      </Modal>
    </div>
  );
}

export default DataKaryawan;
