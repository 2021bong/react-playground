import React, { useState, useEffect } from 'react';
import Card from './Components/Card';

const CardList = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('data/kakao.json')
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <div className='cardList'>
      {state.map((el) => {
        return (
          <Card
            bgImg={el.bgImg}
            type={el.type}
            typeClassName={el.typeClassName}
            title={el.title}
            content={el.content}
            list={el.list}
          />
        );
      })}
    </div>
  );
};

export default CardList;
