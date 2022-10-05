import { useState } from 'react';
import styled from 'styled-components';

const CheckItem = ({ text }) => {
  const [check, setCheck] = useState(false);

  return (
    <List>
      <input id={text} type='checkbox' checked={check} readOnly />
      <span className='checkbox' onClick={() => setCheck((prev) => !prev)}>
        V
      </span>
      <label htmlFor={text} onClick={() => setCheck((prev) => !prev)}>
        {text}
      </label>
    </List>
  );
};

export default CheckItem;

const List = styled.li`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  color: #888;

  label {
    padding-left: 12px;
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    border: 1px solid #888;
    border-radius: 3px;
    cursor: pointer;
    color: #fff;
  }

  input:checked ~ .checkbox {
    border: 1px solid #888;
    background-color: #888;
    color: #fff;
  }
`;
