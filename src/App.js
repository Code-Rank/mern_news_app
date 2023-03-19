
import React, { Component, useState } from "react";
import Navbar from './components/Navbar.js';
import Newitem from "./components/NewItem.js";
import New from './components/New.js'
/* import Newslide from "./components/Newslide.js";
import Loading from "./components/Loading.js"; */
import TopLoading from "./components/TopLoading.js";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



class App extends Component {

 state={
  progress:0,
 };
 setProgress=(progress)=>{
  this.setState({
    progress:progress,
  });
 }

  render() {
    return (
      <>

<LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Navbar new="hello" />

        <div className="container " style={{ marginTop: "10%",  }} >


          <div class="row">
            

              <Routes>
                <Route path="/" element={<New setProgress={this.setProgress} key="home" category="general" country="in" />}></Route>
                <Route exat path="/business" element={<New setProgress={this.setProgress} key="business" category="business" country="in" />}></Route>
                <Route exat path="/entertainment" element={<New setProgress={this.setProgress}key="entertainment" category="entertainment" country="in" />}></Route>
                <Route exat path="/general" element={<New setProgress={this.setProgress} key="general" category="general" country="in" />}></Route>
                <Route exat path="/health" element={<New setProgress={this.setProgress} key="health" category="health" country="in" />}></Route>
                <Route exat path="/science" element={<New setProgress={this.setProgress} key="science" category="science" country="in" />}></Route>
                <Route exat path="/sports" element={<New setProgress={this.setProgress} key="sports" category="sports" country="in" />}></Route>
                <Route exat path="/technology" element={<New setProgress={this.setProgress} key="technology" category="technology" country="in" />}></Route>
              </Routes>



            </div>
          </div>
        







      </>
    );
  }
}
export default App;
