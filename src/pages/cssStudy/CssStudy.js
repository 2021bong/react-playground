import React from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .toggleSwitch,
  .toggleButton {
    transition: all 0.3s ease-in-out;
  }

  .toggleSwitch {
    width: 6rem;
    height: 3rem;
    display: block;
    position: relative;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 0 1rem 3px rgba(0 0 0 / 15%);
    cursor: pointer;

    .toggleButton {
      width: 2.6rem;
      height: 2.6rem;
      position: absolute;
      top: 50%;
      left: 0.2rem;
      transform: translateY(-50%);
      border-radius: 50%;
      background: #207cf5;
    }
  }

  // +선택자도 가능하고 ~선택자도 가능하다
  #toggle:checked + .toggleSwitch {
    background: #207cf5;

    .toggleButton {
      /* 100% -> 끝위치, 2.8rem -> 버튼 크기 */
      left: calc(100% - 2.8rem);
      background: #fff;
    }
  }
`;

const CssStudy = (props) => {
  // const handleToggle = (e) => {
  //   const toggleLabel = e.target.nextSibling;
  //   toggleLabel.classList.toggle('active');
  // };

  return (
    <Toggle>
      <input type='checkbox' id='toggle' hidden />
      <label htmlFor='toggle' className='toggleSwitch'>
        <span className='toggleButton'></span>
      </label>
    </Toggle>
  );
};

export default CssStudy;
