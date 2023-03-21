
import React, { useState } from "react";
import Navbar from './components/Navbar.js';

import New from './components/New.js'
import Footer from "./components/Footer.js";

import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



const App = () => {


  const [progress, setProgress] = useState(0);



  return (
    <>

      <LoadingBar
        color='#f11946'
        progress={progress}

      />
      <Navbar new="hello" />

      <div className="container " style={{ marginTop: "5%", }} >
        <h2>Top headlines</h2>

        <div className="row my-4">


          <Routes>
            <Route path="/" element={<New setProgress={setProgress} key="home" category="general" country="in" />}></Route>
            <Route exat path="/business" element={<New setProgress={setProgress} key="business" category="business" country="in" />}></Route>
            <Route exat path="/entertainment" element={<New setProgress={setProgress} key="entertainment" category="entertainment" country="in" />}></Route>
            <Route exat path="/general" element={<New setProgress={setProgress} key="general" category="general" country="in" />}></Route>
            <Route exat path="/health" element={<New setProgress={setProgress} key="health" category="health" country="in" />}></Route>
            <Route exat path="/science" element={<New setProgress={setProgress} key="science" category="science" country="in" />}></Route>
            <Route exat path="/sports" element={<New setProgress={setProgress} key="sports" category="sports" country="in" />}></Route>
            <Route exat path="/technology" element={<New setProgress={setProgress} key="technology" category="technology" country="in" />}></Route>
          </Routes>



        </div>
      </div>

   <Footer />
      







    </>
  );

}
export default App;
