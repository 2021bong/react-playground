import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { myCountState } from '../../atoms';

const Recoil = (props) => {
  const [count, setCount] = useRecoilState(myCountState);
  return (
    <Main>
      <h1>count</h1>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>up</button>
    </Main>
  );
};

export default Recoil;

const Main = styled.div`
  width: 300px;
  margin: 100px auto 0 auto;
  padding: 10px;
  border: 1px solid red;
  border-radius: 30px;
  text-align: center;

  h1 {
    margin: 10px 0;
    font-weight: 700;
  }

  button {
    margin: 10px 0;
    background-color: red;
    border: none;
    border-radius: 30px;
    color: #fff;
    &:active {
      background-color: darkred;
    }
  }
`;
