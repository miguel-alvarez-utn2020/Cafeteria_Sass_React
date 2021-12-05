import { Navegacion } from "../compartidos/navegacion";


export function HeaderP() {
    return (
      <header className="header header-proceso">
          <div className="contenido-header contenedor">
              <div className="barra">
                  <div className="logo">
                        <img src="assets/img/logo.svg" alt="img-logo" />
                  </div>
                  <Navegacion/>
              </div>
              <div className="textos-header">
                  <h1 className="heading">LOS VERDADEROS EXPERTOS DEL CAFÉ</h1>
              </div>
          </div>
      </header>
    );
  }