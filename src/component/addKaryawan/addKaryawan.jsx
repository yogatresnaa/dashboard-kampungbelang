import React from 'react';
import { Form } from 'react-bootstrap';
import CONFIG from '../../globals/config';

class AddKaryawan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      alamat: '',
      noHp: '',
      awalmasuk: '',
      posisi: '',
      gaji: '',
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onAlamatChange = this.onAlamatChange.bind(this);
    this.onNoHpChange = this.onNoHpChange.bind(this);
    this.onAwalMasukChange = this.onAwalMasukChange.bind(this);
    this.onPosisiChange = this.onPosisiChange.bind(this);
    this.onGajiChange = this.onGajiChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onUserNameChange(event) {
    this.setState(() => {
      return {
        nama: event.target.value,
      };
    });
  }

  onAlamatChange(event) {
    this.setState(() => {
      return {
        alamat: event.target.value,
      };
    });
  }

  onNoHpChange(event) {
    this.setState(() => {
      return {
        noHp: event.target.value,
      };
    });
  }

  onAwalMasukChange(event) {
    this.setState(() => {
      return {
        awalmasuk: event.target.value,
      };
    });
  }

  onPosisiChange(event) {
    this.setState(() => {
      return {
        posisi: event.target.value,
      };
    });
  }

  onGajiChange(event) {
    this.setState(() => {
      return {
        gaji: event.target.value,
      };
    });
  }

  onSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`${CONFIG.BASE_URL}karyawan`, {
      method: 'POST',
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

  render() {
    return (
      <div className='form-contact'>
        <h1>Tambah Karyawan Baru</h1>
        <Form onSubmit={this.onSubmitHandler}>
          <div className='mb-3'>
            <label htmlFor='nameInputId' className='form-label'>
              Nama Karyawan :
            </label>
            <input type='text' className='form-control' id='nameInputId' value={this.state.nama} onChange={this.onUserNameChange} placeholder='nama' />
          </div>
          <div className='mb-3'>
            <label htmlFor='alamatInputId' className='form-label'>
              Alamat :
            </label>
            <input type='text' className='form-control' id='alamatInputId' value={this.state.alamat} onChange={this.onAlamatChange} placeholder='Alamat' />
          </div>
          <div className='mb-3'>
            <label htmlFor='NoHpInputId' className='form-label'>
              No Handphone :
            </label>
            <input type='text' className='form-control' id='NoHpInputId' value={this.state.noHp} onChange={this.onNoHpChange} placeholder='No Handphone' />
          </div>

          <div className='mb-3'>
            <label htmlFor='tglInputId' className='form-label'>
              Tanggal Bergabung :
            </label>
            <input type='text' className='form-control' id='tglInputId' value={this.state.awalmasuk} onChange={this.onAwalMasukChange} placeholder='Tanggal Bergabung' />
          </div>

          <div className='mb-3'>
            <label htmlFor='posisiInputId' className='form-label'>
              Posisi :
            </label>
            <input type='text' className='form-control' id='posisiInputId' value={this.state.posisi} onChange={this.onPosisiChange} placeholder='Posisi' />
          </div>

          <div className='mb-3'>
            <label htmlFor='gajiInputId' className='form-label'>
              Gaji :
            </label>
            <input type='text' className='form-control' id='gajiInputId' value={this.state.gaji} onChange={this.onGajiChange} placeholder='Gaji' />
          </div>
          <button id='submitForm' className='btn color' type='submit'>
            kirim
          </button>
        </Form>
      </div>
    );
  }
}

export default AddKaryawan;
