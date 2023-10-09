import React from 'react';
import CarruselELement from '../atomos/CarruselElement';
import carrusel from '../../data/carrusel.json'
import carousel from './carousel.css';
import Titles from '../../data/Titles.json';
import Title from '../atomos/Title';

const Carousel =() =>{
    return(
      
       <div className='container-disciplina'>
            <div className='titulo'><Title level={Titles.level} contect={Titles.contect}/> </div>
        
            <div className='contect'>
           
               {carrusel.map((item , index) =>(
                    <CarruselELement  key={index} item={item}/>
                 ))}

            </div>
        
      </div>
    )
}

export default Carousel;