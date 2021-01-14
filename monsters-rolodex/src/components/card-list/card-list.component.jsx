import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

/*
// Exercise 1 - 4
export const CardList = props => {
  console.log(props);
  return <div className="card-list">{props.children}</div>;
};
*/

// ==========================================================
// Exercise 5, exporting a component { CardList }

export const CardList = props => {
  // console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster, i) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
