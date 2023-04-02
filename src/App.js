import React from "react"
import NavBar from "./components/navbar"
import Banner from "./components/Banner"
import Skills from"./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

import './App.css';
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
