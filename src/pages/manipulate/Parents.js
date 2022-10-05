import { useRef } from 'react';
import Child from './Child';
import styled from 'styled-components';

const Parents = () => {
  const childRef = useRef();
  return (
    <Main>
      <h1>Manipulate</h1>
      <button className='btn' onClick={() => childRef.current.setCount(1)}>
        reset
      </button>
      <Child ref={childRef} />
    </Main>
  );
};
export default Parents;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 200px auto;
  font-size: 20px;

  button {
    margin-top: 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #a63df2;
    color: #fff;
    &:active {
      background-color: #6d289e;
    }
  }

  .btn {
    margin-bottom: 20px;
    background-color: #e13ffc;
    color: #fff;
    &:active {
      background-color: #a72fbd;
    }
  }

  .count {
    color: #888;
  }
`;
