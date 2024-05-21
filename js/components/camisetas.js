export const getAllCamiseta = async() => {
    const variable = await fetch("http://172.16.101.146:5999/camiseta")
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
            const click = document.querySelector("#camisetas")
            click.addEventListener("click", async() => {
                let todos = document.querySelector(".container__productos__todos")
                todos.innerHTML = ""
                let abrigo = document.querySelector(".container__productos__abrigos")
                abrigo.innerHTML = ""
                let pantalones = document.querySelector(".container__productos__pantalones")
                pantalones.innerHTML = ""
                let carrito = document.querySelector(".container__productos__carrito")
                carrito.innerHTML = ""

                let lugar = document.querySelector(".container__productos__camisetas")
                lugar.appendChild(caja__container)
            })
        }
    } catch (error) {
        console.log(error);
    }
}

// export class myCard extends Component {
//     constructor() {
//         super()
//     }

//     render() {
//         return (
//             <div className="caja__container">
//                 <img src={this.props.imagen} alt="" />
//                 <div className="texto">
//                     <p>{this.props.nombre}</p>
//                     <div className="parrafo">
//                         <p>{this.props.precio}</p>
//                         <button>Agregar</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// customElements.define("my-card", myCard)