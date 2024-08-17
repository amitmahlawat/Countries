import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetails from "./CountryDetails.jsx";
import Header from "./Components/Header.jsx";
import CountryList from "./CountryList.jsx";
import SearchBarContainer from "./SearchBarContainer.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/:country",
        element: <CountryDetails/>
      },
      {
        path: "/",
        element:<CountryList/> 
      }
    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     
    <RouterProvider router={router} />
  </StrictMode>
);
