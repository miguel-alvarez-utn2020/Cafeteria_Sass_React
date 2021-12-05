import { Navegacion } from "../compartidos/navegacion";


export function HeaderG() {
    return (
      <header className="header header-galeria">
          <div className="contenido-header contenedor">
              <div className="barra">
                  <div className="logo">
                        <img src="assets/img/logo.svg" alt="img-logo" />
                  </div>
                  <Navegacion/>
              </div>
              <div className="textos-header">
                  <h1 className="heading">DISFRUTA UNA DELICIOSA TAZA DE CAFÉ</h1>
              </div>
          </div>
      </header>
    );
  }