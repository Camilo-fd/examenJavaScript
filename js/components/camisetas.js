// export const getAllcamisetas = async() => {
//     const variable = await fetch("http://172.16.101.146:5999/")
//     const data = await variable.json()
//     console.log(data);
// }

export const getAllCamiseta = async() => {
    const variable = await fetch("../json/camiseta.json")
    const data = await variable.json()
    
    try {
        for (let i = 0; i < data.length; i++) {
            let nombre = data[i].nombre
            let precio = data[i].precio
            let imagen = data[i].imagen
            let id = data[i].id
            // let borrar = document.querySelector(".container")
            // borrar.innerHTML = ""
            const caja__container = document.createElement("div")
            caja__container.classList.add("caja__container")
            caja__container.innerHTML = /*html*/ `
                <div zid="${id}">
                    <img src="${imagen}" alt="">
                    <div class="texto">
                        <p>${nombre}</p>
                    <div class="parrafo">
                        <p>${precio}</p>
                        <button>Agregar</button>
                    </div>
                </div> 
            `
            // container__productos__camisetas.append(caja__container)
            // const container = document.querySelector(".container")
            // container.innerHTML = "" 
            const click = document.querySelector("#camisetas")

            click.addEventListener("click", async() => {
                let lugar = document.querySelector(".container__productos__camisetas")
                lugar.append(caja__container)
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