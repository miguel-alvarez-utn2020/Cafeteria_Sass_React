import { Navegacion } from "../compartidos/navegacion";


export function HeaderM() {
    return (
      <header className="header header-menu">
          <div className="contenido-header contenedor">
              <div className="barra">
                  <div className="logo">
                        <img src="assets/img/logo.svg" alt="img-logo" />
                  </div>
                  <Navegacion/>
              </div>
              <div className="textos-header">
                  <h1 className="heading">DISFRUTA NUESTRO DELICIOSO MENÚ</h1>
              </div>
          </div>
      </header>
    );
  }