import React from 'react'
import './CardTrainer.css'
import logoPRQ from '../../Assets/Logo/PRQlogo.png'



const CardTrainer = () => {
  return (
    <div className='card'>
      <div className='lines'></div>
      <div className='imgBx'><img src={logoPRQ} alt="" />
      </div>
      <div className='content'>
        <div className='details'>
          <h2>PRQ  <br/> <span>Calistenia</span></h2>
          <div className='data'>
            <h3>Acerca de mi<br /> <span>Soy entrenador de Cali hace mas de 5 años, me apasiona mi trabajo y te invito a unite a esta hermosa familia para entrenar juntos</span></h3> 
          </div>
        </div>
      </div>
    </div>
  )
}


export default CardTrainer;