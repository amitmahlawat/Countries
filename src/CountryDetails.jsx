import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const CountryDetails = () => {
  const params = useParams()
const {state}=useLocation()
const [country,setCountry]=useState(null);
const [notFOund,setNotFound]=useState(false)

console.log(state)

const  updateCountryData= function(data) {
  console.log(data)
  setCountry({
    name: data.name.common,
    NativeName: Object.values(data.name.nativeName)[0].common,
    Population :data.population.toLocaleString('en-IN'),
    Region:data.region,
    SubRegion:data.subregion,
    Capital:data.capital.join(', '),
    topLevelDomain:data.tld,
    Currencies:Object.values(data.currencies).map((curency)=>curency.name).join(", "),
    Language: Object.values(data.languages).join(", "),
    Flag: data.flags.svg,
    borders:[]

})
if(!data.borders){
    data.borders=[]

}
Promise.all(data.borders.map((border)=>{
    return   fetch(`https://restcountries.com/v3.1/alpha/${border}`)
       .then((res)=>res.json())
       .then(([data])=> data.name.common)
       
   }))
   .then((borders)=>{
    
    setTimeout(() => {setCountry((prev)=>({...prev, borders : borders}))
      
    });
   })



  
}

useEffect(()=>{
  if(state){
    updateCountryData(state)
    return
  }
    fetch(`https://restcountries.com/v3.1/name/${params.country}?fullText=true`)
.then((res)=>{
      return  res.json()
 } )
    .then(([data])=>{
      updateCountryData(data)
      console.log(data)
      
        
    }).catch(err=>{
        setNotFound(true)
    })

},[params.country])
// console.log(country[0])
if(notFOund){
    return <div>country not found</div>
}

  return (
 country ===null ? "loading.." : <div className='details-container'>
       <Link onClick={()=>history.back()} className='back-button'><i className="fa-solid fa-arrow-left-long"></i>&nbsp;&nbsp;Back</Link>
       <div className="country-details">
       <img src={country.Flag} alt={country.name} />
       <div className="details-text-container">
       <h1>{country.name}</h1>
       <div className='details-text'>
       <p>
          <b>Native Name :</b>{country.NativeName}
        </p>
         <p> <b>Population :</b>{country.Population}
        </p>
        <p>
          <b>Region :</b>{country.Region}
        </p>
        
        <p>
          <b>Sub Region :</b>{country.SubRegion}
        </p>
        <p>
          <b>Capital :</b>{country.Capital}
          
        </p>
        <p>
          <b>Top Level Domain :</b>{country.topLevelDomain}
        </p>
        <p>
          <b>Currencies :</b>{country.Currencies}
        </p>
        <p>
          <b>Language :</b>{country.Language}
        </p>
       </div>
       {country.borders.length !== 0 && <div className="border-countries">
        <p><b>Border Countries :</b>&nbsp;&nbsp;{
            country.borders.map((border)=><Link key={border} to={`/${border}`}>{border}</Link>)
        }</p>
       </div>}
       </div>
       
       
       </div>
    </div>
  )
}

export default CountryDetails
