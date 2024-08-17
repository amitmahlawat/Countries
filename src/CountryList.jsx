import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountrylistSimmer from "./CountrylistSimmer";
import { useOutletContext } from "react-router-dom";
import SearchBarContainer from './SearchBarContainer';

const CountryList = () => {
  const [countriesData, setCountriesData] = useState([]);
  const[query,setQuery]=useState([])
    const[region,setRegion]=useState('')
  const [isDark]=useOutletContext()
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCountriesData(data);
      });
  }, []);
  
  return (<>
    <SearchBarContainer setQuery={setQuery} setRegion={setRegion}/>
    <main className={`card-list ${isDark ? "dark" : ""}`}>
         
      {!countriesData.length ? <CountrylistSimmer/> :   countriesData.filter((country)=>country.region.includes(region)).filter((country)=>country.name.common.toLowerCase().includes(query)).map((country) => (
        <CountryCard key={Math.random()} country={country} />
      ))}
    </main>
    </>
  )
};

export default CountryList;
