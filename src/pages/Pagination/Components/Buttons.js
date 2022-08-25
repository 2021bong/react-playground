import React, { useState } from 'react';
import './Buttons.scss';

export default function Buttons({ handleQueryString }) {
  const [btnStatus, setBtnStatue] = useState([
    {
      id: 1,
      seleted: true,
    },
    {
      id: 2,
      seleted: false,
    },
    {
      id: 3,
      seleted: false,
    },
    {
      id: 4,
      seleted: false,
    },
    {
      id: 5,
      seleted: false,
    },
  ]);
  const changeBtnStatus = (e) => {
    const newStatus = btnStatus.map((status) => {
      return status.id === Number(e.target.textContent)
        ? { id: status.id, seleted: true }
        : {
            id: status.id,
            seleted: false,
          };
    });
    setBtnStatue(newStatus);
  };
  return (
    <div className='pageBtn'>
      {btnStatus.map((status) => {
        return (
          <button
            key={status.id}
            className={status.seleted ? 'selected' : null}
            onClick={(e) => {
              handleQueryString(e);
              changeBtnStatus(e);
            }}
          >
            {status.id}
          </button>
        );
      })}
    </div>
  );
}
