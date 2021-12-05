import {Link} from "react-router-dom";

export function Navegacion(){
    return(
        <div className="nav-principal">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/proceso">Proceso</Link>
            <Link to="/menu">Menú</Link>
            <Link to="/galeria">Galería</Link>
            <Link to="/contacto">Contacto</Link>
        </div>
    )
}