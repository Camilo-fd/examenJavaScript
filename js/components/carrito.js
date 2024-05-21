export const getAllCarrito = async() => {
    const variable = await fetch("http://172.16.101.146:5999/carrito")
    const data = await variable.json()
    
    try {
        for (let i = 0; i < data.length; i++) {
            let abrigo = data[i].abrigoId;
            let pantalon = data[i].pantalonId;
            let camiseta = data[i].camisetaId;
            let cantidad = data[i].cantidad;
            let carrito = document.createElement("div")
            carrito.classList.add("caja__container__carritos")
            carrito.innerHTML = /*html*/ `
                <div class="texto__carritos">
                    <div class="texto1__carritos">
                        <p>${abrigo}</p>
                        <p>${cantidad}</p>
                    </div>
                    <div class="texto1__carritos">
                        <p>Cantidad</p>
                        <div class="lineado">
                            <p>2</p>
                        </div>
                    </div>
                    <div class="texto1__carritos">
                        <p>Precio</p>
                        <p>$ 1.000</p>
                    </div>
                    <div class="texto1__carritos">
                        <p>Subtotal</p>
                        <p>$ 2.000</p>
                    </div>
                    <i class='bx bx-cart-add'></i>
                </div>
            `
            // container__productos__carrito.appendChild(carrito)

            
            const click = document.querySelector("#carrito")
            click.addEventListener("click", async() => {
                let todos = document.querySelector(".container__productos__todos")
                todos.innerHTML = ""
                let abrigo = document.querySelector(".container__productos__abrigos")
                abrigo.innerHTML = ""
                let pantalones = document.querySelector(".container__productos__pantalones")
                pantalones.innerHTML = ""

                let lugar = document.querySelector(".container__productos__carrito")
                lugar.appendChild(carrito)
            })
        }
    } catch (error) {
        console.log(error);
    }
}