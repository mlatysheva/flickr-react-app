import React from 'react';
import { Card } from './Card';
import { IFormCard } from './Form';

interface IFormListProps {
  candidates: IFormCard[];
}

export function FormList(props: IFormListProps) {
  return (
    <div className="container">
      <h3>New candidates for G20:</h3>
      <div className="cards-wrapper">
        {props.candidates.map((card: IFormCard) => (
          <Card
            key={card.id}
            id={card.id}
            country={card.country}
            continent={card.continent}
            flag_local={card.flag_local}
            population={card.population}
            GDP={card.gdp}
          />
        ))}
      </div>
    </div>
  );
}
