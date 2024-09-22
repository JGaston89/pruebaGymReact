import './App.css';
import Title from './Components/Title/Title';
import CardTrainer from './Components/CardTrainer/CardTrainer';
import CardTrainer2 from './Components/CardTrainer/CarTrainer2';
import Galeria from './Components/Galeria/Galeria';
import CardTrainerPRQ from './Components/CardTrainer/CardTrainerPRQ';
import Promos from './Components/Promos/Promos.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div >
      <Title/>
      <div className="App">
        <div className='espaciadorTarjetas'> 
          <CardTrainer/>
          <CardTrainerPRQ/>
          <CardTrainer2/>
        </div>
        <div>
          <div className='espaciadorGaleriaYPromos'>
            <Galeria className='galeria'/>
            <Promos/>
          </div>
        </div>
          <div className='footer'>
            <Footer/>
          </div>
      </div>
    </div>
    

  );
}

export default App;
