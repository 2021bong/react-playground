import React from 'react';
import { useNavigate, useParams } from 'react-router';
import './Card.scss';

function Card(props) {
  const navigater = useNavigate();
  return (
    <>
      {props && (
        <div
          className='cardContainer'
          onClick={() => {
            navigater(`/monsters/detail/${props.id}`);
          }}
        >
          <img
            src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
            alt='profile img'
          />
          <h2>{props.name}</h2>
          <p>{props.email}</p>
        </div>
      )}
    </>
  );
}

export default Card;
