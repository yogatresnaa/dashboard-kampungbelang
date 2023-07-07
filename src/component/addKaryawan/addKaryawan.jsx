import React from 'react';
import { Form } from 'react-bootstrap';

function AddKaryawan() {
  return (
    <div className='form-contact'>
      <h1>Tambah Karyawan Baru</h1>
      <Form>
        <div className='mb-3'>
          <label htmlFor='nameInputId' className='form-label'>
            Nama Karyawan :
          </label>
          <input type='text' className='form-control' id='nameInputId' placeholder='nama' />
        </div>
        <div className='mb-3'>
          <label htmlFor='alamatInputId' className='form-label'>
            Alamat :
          </label>
          <input type='text' className='form-control' id='alamatInputId' placeholder='Alamat' />
        </div>
        <div className='mb-3'>
          <label htmlFor='NoHpInputId' className='form-label'>
            No Handphone :
          </label>
          <input type='text' className='form-control' id='NoHpInputId' placeholder='No Handphone' />
        </div>

        <div className='mb-3'>
          <label htmlFor='tglInputId' className='form-label'>
            Tanggal Bergabung :
          </label>
          <input type='text' className='form-control' id='tglInputId' placeholder='Tanggal Bergabung' />
        </div>

        <div className='mb-3'>
          <label htmlFor='posisiInputId' className='form-label'>
            Posisi :
          </label>
          <input type='text' className='form-control' id='posisiInputId' placeholder='Posisi' />
        </div>

        <div className='mb-3'>
          <label htmlFor='gajiInputId' className='form-label'>
            Gaji :
          </label>
          <input type='text' className='form-control' id='gajiInputId' placeholder='Gaji' />
        </div>
        <button id='submitForm' className='btn color' type='submit'>
          kirim
        </button>
      </Form>
    </div>
  );
}

export default AddKaryawan;
