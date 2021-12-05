import { Navegacion } from "../compartidos/navegacion";

export function HeaderN() {
    return (
        <>
            <header className="header header-nosotros">
                <div className="contenido-header contenedor">
                    <div className="barra">
                        <div className="logo">
                                <img src="assets/img/logo.svg" alt="img-logo" />
                        </div>
                        <Navegacion/>
                    </div>
                    <div className="textos-header">
                        <h1 className="heading">UNA NUEVA EXPERIENCIA CADA DÍA</h1>
                    </div>
                </div>
            </header>
            
        </>
    );
  }
  