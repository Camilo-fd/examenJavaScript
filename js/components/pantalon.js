export const getAllPantalon = async() => {
    const variable = await fetch("http://172.16.101.146:5999/pantalon")
    const data = await variable.json()
    
    try {
        for (let i = 0; i < data.length; i++) {
            let nombre = data[i].nombre
            let precio = data[i].precio
            let imagen = data[i].imagen
            let id = data[i].id
            const caja__container = document.createElement("div")
            caja__container.classList.add("caja__container")
            caja__container.innerHTML = /*html*/ `
                <div class="caja" id="${id}">
                    <img src="${imagen}" alt="">
                    <div class="texto">
                        <p>${nombre}</p>
                    <div class="parrafo">
                        <p>${precio}</p>
                        <button>Agregar</button>
                    </div>
                </div> 
            `
            const click = document.querySelector("#pantalones")
            click.addEventListener("click", async() => {
                let todos = document.querySelector(".container__productos__todos")
                todos.innerHTML = ""
                let camiseta = document.querySelector(".container__productos__camisetas")
                camiseta.innerHTML = ""
                let abrigo = document.querySelector(".container__productos__abrigos")
                abrigo.innerHTML = ""
                let carrito = document.querySelector(".container__productos__carrito")
                carrito.innerHTML = ""

                let lugar = document.querySelector(".container__productos__pantalones")
                lugar.appendChild(caja__container)
            })
        }
    } catch (error) {
        console.log(error);
    }
}