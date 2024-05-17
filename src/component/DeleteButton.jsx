import React from 'react';

function DeleteButton({ id, onDelete }) {
  return (
    <div>
      <button className='karyawan-item__delete' onClick={() => onDelete(id)}>
        Hapus
      </button>
    </div>
  );
}

export default DeleteButton;
