import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Card from './Components/Card/Card';
import './MonsterDetail.scss';

function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const navigater = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        json.forEach((user) => {
          if (user.id === Number(params.id)) {
            setMonster(user);
          }
        });
      });
  }, [params]);

  return (
    <div className='urlParameters'>
      <div className='btnWrapper'>
        <button onClick={() => navigater('/monsters')}>
          Back to Monsters List
        </button>
      </div>
      <Card id={monster.id} name={monster.name} email={monster.email} />
      <div className='btnWrapper'>
        <button
          onClick={() => navigater(`/monsters/detail/${Number(params.id) - 1}`)}
        >
          Previous
        </button>
        <button
          onClick={() => navigater(`/monsters/detail/${Number(params.id) + 1}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MonsterDetail;
