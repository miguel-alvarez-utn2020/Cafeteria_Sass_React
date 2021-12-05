import { Navegacion } from "../compartidos/navegacion";


export function HeaderC() {
    return (
      <header className="header header-contacto">
          <div className="contenido-header contenedor">
              <div className="barra">
                  <div className="logo">
                        <img src="assets/img/logo.svg" alt="img-logo" />
                  </div>
                  <Navegacion/>
              </div>
              <div className="textos-header">
                  <h1 className="heading">MEJORES GRANOS, MEJOR CAFÉ</h1>
              </div>
          </div>
      </header>
    );
  }