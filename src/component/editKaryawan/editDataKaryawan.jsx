import React from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import CONFIG from '../../globals/config';

function EditDataKaryawan({ entityId }) {
  const [data, setData] = React.useState({
    id: entityId,
    nama: '',
    alamat: '',
    noHp: '',
    awalmasuk: '',
    posisi: '',
    gaji: '',
  });

  React.useEffect(() => {
    if (entityId) {
      fetchData();
    }
  }, [entityId]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}karyawan/{id}`);
      const responsJson = await response.json();
      setData(responsJson.data.karyawan);
      console.log(responsJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`${CONFIG.BASE_URL}karyawan`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true, data: null };
    }
    return { error: false, data: responseJson.data };
  };

  return (
    <div className='form-contact popup'>
      <h1>Tambah Karyawan Baru</h1>
      <Form onSubmit={onSubmitHandler}>
        <div className='mb-3'>
          <label htmlFor='nameInputId' className='form-label'>
            Nama Karyawan :
          </label>
          <input type='text' className='form-control' id='nameInputId' value={data.nama} onChange={handleChange} placeholder='nama' />
        </div>
        <div className='mb-3'>
          <label htmlFor='alamatInputId' className='form-label'>
            Alamat :
          </label>
          <input type='text' className='form-control' id='alamatInputId' value={data.alamat} onChange={handleChange} placeholder='Alamat' />
        </div>
        <div className='mb-3'>
          <label htmlFor='NoHpInputId' className='form-label'>
            No Handphone :
          </label>
          <input type='text' className='form-control' id='NoHpInputId' value={data.noHp} onChange={handleChange} placeholder='No Handphone' />
        </div>

        <div className='mb-3'>
          <label htmlFor='tglInputId' className='form-label'>
            Tanggal Bergabung :
          </label>
          <input type='text' className='form-control' id='tglInputId' value={data.awalmasuk} onChange={handleChange} placeholder='Tanggal Bergabung' />
        </div>

        <div className='mb-3'>
          <label htmlFor='posisiInputId' className='form-label'>
            Posisi :
          </label>
          <input type='text' className='form-control' id='posisiInputId' value={data.posisi} onChange={handleChange} placeholder='Posisi' />
        </div>

        <div className='mb-3'>
          <label htmlFor='gajiInputId' className='form-label'>
            Gaji :
          </label>
          <input type='text' className='form-control' id='gajiInputId' value={data.gaji} onChange={handleChange} placeholder='Gaji' />
        </div>
        <button id='submitForm' className='btn color' type='submit'>
          kirim
        </button>
      </Form>
    </div>
  );
}

export default EditDataKaryawan;
