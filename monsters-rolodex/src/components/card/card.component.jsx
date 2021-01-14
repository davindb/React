import React from 'react';
import './card.styles.css';

// Exercise 5, exporting a component { Card }
export const Card = props => {
  console.log(props);
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
