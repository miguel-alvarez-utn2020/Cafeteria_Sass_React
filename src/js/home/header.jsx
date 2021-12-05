import { Navegacion } from "../compartidos/navegacion";


export function Header() {
    return (
        <>
            <header className="header header-inicio">
                <div className="contenido-header contenedor">
                    <div className="barra">
                        <div className="logo">
                                <img src="assets/img/logo.svg" alt="img-logo" />
                        </div>
                        <Navegacion/>
                    </div>
                    <div className="textos-header">
                        <h1 className="heading">Disfruta una deliciosa taza de café</h1>
                    </div>
                </div>
            </header>
           
        </>
    );
  }
  