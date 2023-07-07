import React from 'react';
import { Link } from 'react-router-dom';

function NavigationDashboard() {
  return (
    <div>
      <nav>
        <h1>DASHBOARD</h1>
        <p>RESTO KAMPUNG BELANG</p>
        <ul className='nav'>
          <li>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }} to='/datacustomer'>
              Data Pelanggan
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }} to='/datakaryawan'>
              Data Karyawan
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationDashboard;
