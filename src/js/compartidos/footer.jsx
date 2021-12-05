import { Derechos } from "./derechos";

export function Footer(){
    return(
        <div className="footer">
            <div className="contenedor contactos-grid">
                <div className="contacto">
                    <h3>Ubicación</h3>
                    <p>Nicolas Copernico 5990</p>
                    <p>Guadalaja, jalisco</p>
                </div>  
                <div className="contacto">
                    <h3>Reservación</h3>
                    <p>Tel.<span>3850-9102</span></p>
                    <p>Llamar</p>
                </div>  
                <div className="contacto">
                    <h3>Horario</h3>
                    <p>lun-jue: <span>11:00 - 22:00</span></p>
                    <p>Vie-Sab: <span>09:00 - 24:00</span></p>
                    <p>Domingo: <span>Cerrado</span> </p>
                </div>
            </div>
            <Derechos/>
        </div>
    );
}