import './build/css/app.css';
import { Footer } from './js/compartidos/footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Home } from './js/home/home';
import { Nosotros } from './js/link-nosotros/nosotros';
import { Procesos } from './js/link-proceso/procesos';
import { Menu } from './js/link-menu/manu';
import { Galeria } from './js/link-galeria/galeria';
import { Contactos } from './js/link-contacto/contactos';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/nosotros" element={ <Nosotros/> }/>
          <Route path="/proceso" element={ <Procesos/> } />
          <Route path="/menu" element={ <Menu/> } />
          <Route path="/galeria" element={ <Galeria/> } />
          <Route path="/contacto" element={ <Contactos/> } />
          <Route path="/" element={ <Home /> }/>
      </Routes>

      <Footer/> 
    </Router>
  );
}

export default App;

/* 
  <main/>
  <Menu/>
  <Testimonial/>
  <Footer/> 
  */