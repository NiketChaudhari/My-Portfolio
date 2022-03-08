import React from "react"
import {
  Routes,
  Route,
} from "react-router-dom";


import "../Pages_Style.css"

import Introduction from '../Pages/Introduction';
import About_Me from '../Pages/About_Me';
import Projects from '../Pages/Projects';
import Contact_Me from '../Pages/Contact_Me';


const Main = () => {

  return (
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/About_Me" element={<About_Me />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact_Me" element={<Contact_Me />} />
    </Routes>
  )
}

export default Main;