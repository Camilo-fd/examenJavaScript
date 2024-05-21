import { getAllCamiseta } from './components/camisetas.js'
import { getAllAbrigo } from './components/abrigos.js'
import { getAllPantalon } from './components/pantalon.js'
import { getAllCarrito } from './components/carrito.js'

// let ABRIGO = await getAllAbrigo()
// let PANTALON = await getAllAbrigo()
// let CAMISETA = await getAllAbrigo()
await getAllAbrigo()
await getAllCamiseta()
await getAllPantalon()
await getAllCarrito()

const getTodos = async() => {

    try {

        const productos = document.querySelector("#productos")
        productos.addEventListener("click", async() => {
            let abrigo = document.querySelector(".container__productos__abrigos")
            abrigo.innerHTML = ""
            let pantalones = document.querySelector(".container__productos__pantalones")
            pantalones.innerHTML = ""
            let camiseta = document.querySelector(".container__productos__camisetas")
            camiseta.innerHTML = ""
            let carrito = document.querySelector(".container__productos__carrito")
            carrito.innerHTML = ""

            let todos = document.querySelector(".container__productos__todos")
            
        })


    } catch (error) {
        console.log(error);
    }
}

await getTodos()
