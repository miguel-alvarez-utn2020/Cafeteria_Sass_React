
export function MenuList(){
    return(
        <section className="nuestro-menu">
            <h2 className="heading-blanco"><span>Nuestro delicioso</span> Menú </h2>

            <div className="contenedor grid-menu">
                <section className="menu cafe">
                    <h3>Café</h3>
                    <ul>
                        <li>
                            <p>Café Latte <span>Café Espresso con leche caliente evaporada</span> </p>
                            <p class="precio">$25</p>
                        </li>
                        <li>
                            <p>Café Mocha <span>Espresso con crema batida</span> </p>
                            <p class="precio">$30</p>
                        </li>
                        <li>
                            <p>Café Americano <span>Café Negro</span> </p>
                            <p class="precio">$30</p>
                        </li>
                        <li>
                            <p>Capuccino<span>Espresso con una capa suave de espuma</span> </p>
                            <p class="precio">$25</p>
                        </li>
                        <li>
                            <p>Café Mocha Frio<span>Espresso, dulce con mocha y leche.</span> </p>
                            <p class="precio">$29</p>
                        </li>
                        <li>
                            <p>Mocha Frio Quemado<span>Espresso, hielo, con azucar quemada y mantequilla.</span> </p>
                            <p class="precio">$35</p>
                        </li>
                        <li>
                            <p>Latte con Caramelo<span>Espresso, leche y caramelo.</span> </p>
                            <p class="precio">$39</p>
                        </li>
                    </ul>
                </section>
                <section className="menu comida">
                    <h3>Comida</h3>
                    <ul>
                        <li>
                            <p>Baguette de Pollo <span>Delicioso Baguette con pollo a la plancha</span> </p>
                            <p class="precio">$45</p>
                        </li>
                        <li>
                            <p>Baguette Pollo y Queso <span>Baguette combinado con Pollo y Queso Manchego</span> </p>
                            <p class="precio">$50</p>
                        </li>
                        <li>
                            <p>Baguette con Tocino<span>Baguette con especias y verduras, además de tocino</span> </p>
                            <p class="precio">$50</p>
                        </li>
                        <li>
                            <p>Baguette de Jamón<span>Delicioso Baguette con Jamón y Especias</span> </p>
                            <p class="precio">$65</p>
                        </li>
                        <li>
                            <p>Baguette con Jamón, Queso y Tocino<span>El especial de la casa</span> </p>
                            <p class="precio">$69</p>
                        </li>
                        <li>
                            <p>Sandwich de Pollo<span>Delicioso sandwich con Pollo y especies</span> </p>
                            <p class="precio">$65</p>
                        </li>
                        <li>
                            <p>Sandwich de Jamón y queso<span>Queso Amarillo con Jamón y Queso</span> </p>
                            <p class="precio">$59</p>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
}