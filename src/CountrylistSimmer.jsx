import React from "react";

const CountrylistSimmer = () => {


  return (
    <div className="card-list">
        {Array.from({length:100}).map((e,i)=>{
            return <div key={i} style={{height:"350px", backgroundColor:"#ccc"}}  className="CountryCard"></div>
        })}
      
     
      
    </div>
  );
};

export default CountrylistSimmer;
