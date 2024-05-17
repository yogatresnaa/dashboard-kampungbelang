import React from 'react';
import { Form } from 'react-bootstrap';
import CONFIG from '../globals/config';
import useInput from '../customHooks/hooksAddKaryawan';
import { useNavigate } from 'react-router-dom';

function PageInputDataKaryawan() {
  const navigate = useNavigate();
  const [nama, onNama] = useInput('');
  const [alamat, onAlamat] = useInput('');
  const [noHp, onNoHp] = useInput('');
  const [awalmasuk, onAwalMasuk] = useInput('');
  const [posisi, onPosisi] = useInput('');
  const [gaji, onGaji] = useInput('');

  const data = {
    nama: nama,
    alamat: alamat,
    noHp: noHp,
    awalmasuk: awalmasuk,
    posisi: posisi,
    gaji: gaji,
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    dataKaryawan();
    navigate('/datakaryawan');
  };

  const dataKaryawan = async (event) => {
    const response = await fetch(`${CONFIG.BASE_URL}karyawan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    if (responseJson.status !== 'success') {
      alert('yoi ! data berhasil ditambahkan');
      return { error: true, data: null };
    }
    alert('yoi ! data berhasil ditambahkan');
    return { error: false, data: responseJson.data };
  };

  return (
    <div className='form-contact'>
      <h1>Tambah Karyawan Baru</h1>

      <Form onSubmit={handelSubmit}>
        <div className='mb-3'>
          <label htmlFor='nameInputId' className='form-label'>
            Nama Karyawan :
          </label>
          <input type='text' className='form-control' id='nameInputId' value={nama} onChange={onNama} placeholder='nama' />
        </div>

        <div className='mb-3'>
          <label htmlFor='alamatInputId' className='form-label'>
            Alamat :
          </label>
          <input type='text' className='form-control' id='alamatInputId' value={alamat} onChange={onAlamat} placeholder='Alamat' />
        </div>

        <div className='mb-3'>
          <label htmlFor='NoHpInputId' className='form-label'>
            No Handphone :
          </label>
          <input type='text' className='form-control' id='NoHpInputId' value={noHp} onChange={onNoHp} placeholder='No Handphone' />
        </div>

        <div className='mb-3'>
          <label htmlFor='tglInputId' className='form-label'>
            Tanggal Bergabung :
          </label>
          <input type='text' className='form-control' id='tglInputId' value={awalmasuk} onChange={onAwalMasuk} placeholder='Tanggal Bergabung' />
        </div>

        <div className='mb-3'>
          <label htmlFor='posisiInputId' className='form-label'>
            Posisi :
          </label>
          <input type='text' className='form-control' id='posisiInputId' value={posisi} onChange={onPosisi} placeholder='Posisi' />
        </div>

        <div className='mb-3'>
          <label htmlFor='gajiInputId' className='form-label'>
            Gaji :
          </label>
          <input type='text' className='form-control' id='gajiInputId' value={gaji} onChange={onGaji} placeholder='Gaji' />
        </div>

        <button id='submitForm' className='btn color' type='submit'>
          kirim
        </button>
      </Form>
    </div>
  );
}

export default PageInputDataKaryawan;
