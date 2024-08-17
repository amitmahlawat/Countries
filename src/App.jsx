import Header from "./Components/Header"
import "./App.css";
import SearchBarContainer from "./SearchBarContainer";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function App() {
  const [isDark, setIsdark] = useState(JSON.parse(localStorage.getItem("theme")));
 


  return (
    <div className={`${isDark ? "dark" : ""}`}>
    
    <Header theme={[isDark, setIsdark]}/>
    <main className={`${isDark ? "dark" : ""}`}>
   
    
    <Outlet context={[isDark, setIsdark]}/>
    </main>
    
     
     
    </div>
  )
}

export default App
