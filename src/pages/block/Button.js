import React from 'react';

const Button = ({buttonNo, handleButtonShow}) => {
  return <button id={buttonNo} onClick={handleButtonShow}>{`블럭${buttonNo}버튼`}</button>
}

export default Button;