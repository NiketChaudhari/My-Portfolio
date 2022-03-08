import React, { useState } from 'react';


import Header from './Orient/Header';
import Main from "./Orient/Main"
import Footer from './Orient/Footer';

import "./Pages_Style.css"



const App = () => {


  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()


  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })



  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className='cursor'
        style={{
          left: cursorX + "px",
          top: cursorY + "px"
        }}>

      </div>

    </>
  );
}

export default App;
