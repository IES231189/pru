import React from 'react'
import Navbar from './Components/organizmo/Navbar'
import Carousel from './Components/moleculas/Carousel';
import Css from '/src/App.css'
import DinamicSlider from './Components/moleculas/DinamicSlider';
import ContainerPlane from './Components/moleculas/ContainerPlane';

function App() {

  return (
      <div>
         <Navbar/>
         <DinamicSlider/>
         <Carousel/>
         <ContainerPlane/>
         
      </div>
      
  )


}

export default App;
