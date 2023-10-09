import React,{useState,useEffect} from 'react';
import SliderDinamic from './../../data/SliderDinamic.json';
import slider from './slider.css';

const DinamicSlider=()=>{
    
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderDinamic.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);


    return (
        <div className="slider">
          {SliderDinamic.map((item, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="caption">{item.caption}</div>
            </div>
          ))}
        </div>
      );
      

      
}


export default DinamicSlider;