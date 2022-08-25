import React, { useState, useEffect } from 'react';
import Buttons from './Components/Buttons';
import CardList from './Components/CardList/CardList';
import './Users.scss';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('?offset=0&limit=20');

  const handleQueryString = (e) => {
    let offset;
    switch (Number(e.target.textContent)) {
      case 1:
        offset = 0;
        break;
      case 2:
        offset = 20;
        break;
      case 3:
        offset = 40;
        break;
      case 4:
        offset = 60;
        break;
      case 5:
        offset = 80;
        break;
      default:
        console.log('default case');
    }
    setQuery(`?offset=${offset}&limit=20`);
  };

  // 데이터 로딩
  useEffect(() => {
    fetch(`http://localhost:8000/users${query}`)
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, [query]);

  return (
    <div className='photos'>
      <h1>Mini Project - Pagination</h1>
      <Buttons handleQueryString={handleQueryString} />
      <CardList users={users} />
    </div>
  );
}
