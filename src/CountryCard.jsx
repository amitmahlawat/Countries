import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
  

  return (
    <Link to={country.name.common} className="CountryCard"  state={country}>
      <img src={country.flags.svg} alt="flag" />

      <div className="card-text">
        <h3 className="card-title">{country.name.common}</h3>
        <p>
          <b>Population :</b> {country.population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region :</b> {country.region}
        </p>
        <p>
          <b>Capital :</b> {country.capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
