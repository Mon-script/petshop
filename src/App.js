import logo from './logo.svg';
import './App.css';
import Caja from './componentes/Caja';
import Carrucel from './componentes/carrucel';
import Galeria from './pages/galeriaGtitos'
import Header from './componentes/headre';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carrucel/>
      <Galeria />
      <Footer/>
    </div>
  );
}

export default App;
