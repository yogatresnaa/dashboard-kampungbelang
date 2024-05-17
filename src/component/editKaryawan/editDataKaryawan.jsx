import React from 'react';
import Form from 'react-bootstrap/Form';
import CONFIG from '../../globals/config';

function EditDataKaryawan({ entityId, closeModal, karyawan }) {
  const [data, setData] = React.useState({
    id: entityId,
    nama: karyawan?.nama || '',
    alamat: karyawan?.alamat || '',
    noHp: karyawan?.noHp || '',
    awalmasuk: karyawan?.awalmasuk || '',
    posisi: karyawan?.posisi || '',
    gaji: karyawan?.gaji || '',
  });

  React.useEffect(() => {
    if (entityId) {
      setData({
        id: entityId,
        nama: karyawan?.nama || '',
        alamat: karyawan?.alamat || '',
        noHp: karyawan?.noHp || '',
        awalmasuk: karyawan?.awalmasuk || '',
        posisi: karyawan?.posisi || '',
        gaji: karyawan?.gaji || '',
      });
    }
  }, [entityId, karyawan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${CONFIG.BASE_URL}karyawan/${entityId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null };
      }
      alert('Data karyawan berhasil diperbarui');
      closeModal(); // Tutup modal setelah penyimpanan berhasil
      return { error: false, data: responseJson.data };
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat memperbarui data');
      return { error: true, data: null };
    }
  };

  return (
    <div className='form-contact popup'>
      <h1>Tambah Karyawan Baru</h1>
      <Form onSubmit={onSubmitHandler}>
        <div className='mb-3'>
          <label htmlFor='nameInputId' className='form-label'>
            Nama Karyawan :
          </label>
          <input type='text' className='form-control' id='nameInputId' name='nama' value={data.nama} onChange={handleChange} placeholder='nama' />
        </div>
        <div className='mb-3'>
          <label htmlFor='alamatInputId' className='form-label'>
            Alamat :
          </label>
          <input type='text' className='form-control' id='alamatInputId' name='alamat' value={data.alamat} onChange={handleChange} placeholder='Alamat' />
        </div>
        <div className='mb-3'>
          <label htmlFor='NoHpInputId' className='form-label'>
            No Handphone :
          </label>
          <input type='text' className='form-control' id='NoHpInputId' name='noHp' value={data.noHp} onChange={handleChange} placeholder='No Handphone' />
        </div>

        <div className='mb-3'>
          <label htmlFor='tglInputId' className='form-label'>
            Tanggal Bergabung :
          </label>
          <input type='text' className='form-control' id='tglInputId' name='awalmasuk' value={data.awalmasuk} onChange={handleChange} placeholder='Tanggal Bergabung' />
        </div>

        <div className='mb-3'>
          <label htmlFor='posisiInputId' className='form-label'>
            Posisi :
          </label>
          <input type='text' className='form-control' id='posisiInputId' name='posisi' value={data.posisi} onChange={handleChange} placeholder='Posisi' />
        </div>

        <div className='mb-3'>
          <label htmlFor='gajiInputId' className='form-label'>
            Gaji :
          </label>
          <input type='text' className='form-control' id='gajiInputId' name='gaji' value={data.gaji} onChange={handleChange} placeholder='Gaji' />
        </div>
        <button id='submitForm' className='btn color' type='submit'>
          kirim
        </button>
      </Form>
    </div>
  );
}

export default EditDataKaryawan;
