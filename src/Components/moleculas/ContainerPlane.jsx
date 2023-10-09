import React from 'react';
import Img from '../atomos/Img';
import imgData from '../../data/img.json';
import Parrafo from '../atomos/Parrafo';
import parrafosData from '../../data/parrafos.json';
import Button from '../atomos/button';
import buttonData from '../../data/button.json';
import containerPlane from './containerPlane.css';
import Title from '../atomos/Title';
import Titledata from '../../data/Title.json'


const ContainerPlane = ()=>{

    const textParrafo=parrafosData.parrafo1;
    const button1=buttonData.buton1;

    return (
        
        <div className='conten'>
        
            <Title level={Titledata.level} contect={Titledata.contect}/>
             <div className='container-plane'>
                
                     {
                        imgData.map((item ,index)=>(
                            <Img key={index} image={item.image}/> 
                     ))}

                    <div className='contain-plan'>
                        <Parrafo text={textParrafo}/>
                        <Button item={button1} />
                    </div> 
            </div>
          
        </div>
        
    )
}


export default ContainerPlane;