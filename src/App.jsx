import './App.css'
import {Routes, Route} from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Explore from "./assets/components/Explore";
import About from "./assets/components/About";
import Footer from './assets/components/Footer';

import Sem3 from "./assets/components/sem3/Sem3";
import Sem4 from "./assets/components/sem4/Sem4";
import Sem5 from "./assets/components/sem5/Sem5";
function App() {

  return (
    <div className='App w-full h-auto' style={{ backgroundColor: "#EEEEEE" }}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/> 
        <Route path='/about' element={<About/>}/> 

        <Route path='/sem3' element={<Sem3/>}/>
        <Route path='/sem4' element={<Sem4/>}/>
        <Route path='/sem5' element={<Sem5/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
