import React from 'react';
export interface CardProps {
  id: string | undefined;
  country: string;
  continent: string;
  flag?: string;
  flag_local: string;
  population: number;
  GDP: number;
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="title-wrapper">
        <img className="flag-image" src={props.flag_local} alt="flag" />
        <p className="country">{props.country}</p>
      </div>
      <p className="continent">
        <span className="explanation">Continent:&nbsp;</span>
        {props.continent}
      </p>
      <p className="population">
        <span className="explanation">Population, mln:&nbsp;</span>
        {props.population}
      </p>
      <p className="gdp">
        <span className="explanation">GDP, $bln:&nbsp;</span>
        {props.GDP}
      </p>
    </div>
  );
}
