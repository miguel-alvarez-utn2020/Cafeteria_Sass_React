import { Galeria, GaleriaList } from "./galeria-list";
import { Iconos } from "./iconos";


export function Main(){
    return(
        <>
            <main className="contenedor contenido-principal text-center">
                <section className="conoce">
                    <h2><span>Conoce más</span>sobre nosotros</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolore enim nemo neque repellendus tempora. Totam, amet. 
                        Atque quisquam impedit dolorum unde suscipit perferendis consequatur
                        consequuntur rem. Obcaecati, vero repudiandae! Repudiandae?</p>

                </section>
                <Iconos/>
                <GaleriaList/>
            </main>
           
        </>
    );
}