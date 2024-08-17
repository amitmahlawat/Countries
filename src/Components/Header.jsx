import React, { useState } from "react";
// import '.App.css';

const Header = ({theme}) => {
  // const [isDark, setIsdark] = useState(JSON.parse(localStorage.getItem("theme")));
const  [isDark, setIsdark]=theme
// if(isDark){
//   document.body.classList.add("dark")
// }else{
//   document.body.classList.remove("dark")
// }

// console.log(typeof(JSON.parse(localStorage.getItem("theme"))))

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2>Where in the world ?</h2>
        <p
          className="theme-changer"
          onClick={() =>{ 
            setIsdark(!isDark)
            localStorage.setItem("theme",!isDark)
          }
          
          }
        >
          <i className={`fa-regular fa-${isDark? "sun" : "moon"}`}></i>&nbsp;&nbsp; {`${isDark ? "Light Mode" : "Dark Mode"} `}
        </p>
      </div>
    </header>
  );
};

export default Header;
