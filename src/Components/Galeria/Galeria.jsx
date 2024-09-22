import React from 'react'
import './Galeria.css'
import Foto1 from '../../Assets/Galeria/aya2.jpg'
import Foto2 from '../../Assets/Galeria/aya3.png'
import Foto3 from '../../Assets/Galeria/aya4.png'
import Foto4 from '../../Assets/Galeria/aya2.jpg'


const Galeria = () => {
  return (
    <div className="">
    <div className="slider-box">
      <div className="slider-container">
        <div className="slider-card">
          <img className="slider-img slider-background" src={Foto1} alt="" />
        </div>
        <div className="slider-card">
          <img className="slider-img slider-background" src={Foto2} alt="" />
        </div>
        <div className="slider-card">
          <img className="slider-img slider-background" src={Foto3} alt="" />
        </div>
        <div className="slider-card">
          <img className="slider-img slider-background" src={Foto4} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Galeria