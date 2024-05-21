// export const getAllPantalon = async() => {
//     const variable = await fetch("../json/pantalon.json")
//     const data = await variable.json()
    
//     try {
//         for (let i = 0; i < data.length; i++) {
//             let nombre = data[i].nombre
//             let precio = data[i].precio
//             let imagen = data[i].imagen
//             let id = data[i].id
//             // const container__productos__camisetas = document.querySelector(".container__productos__camisetas")
//             const caja__container = document.createElement("div")
//             caja__container.classList.add("caja__container")
//             caja__container.innerHTML = /*html*/ `
//                 <div zid="${id}">
//                     <img src="${imagen}" alt="">
//                     <div class="texto">
//                         <p>${nombre}</p>
//                     <div class="parrafo">
//                         <p>${precio}</p>
//                         <button>Agregar</button>
//                     </div>
//                 </div> 
//             `
//             // container__productos__camisetas.append(caja__container)
//             // const container = document.querySelector(".container")
//             // container.innerHTML = "" 
//             const click = document.querySelector("#pantalones")
//             click.addEventListener("click", async() => {
//                 let lugar = document.querySelector(".container__productos__pantalones")
//                 lugar.append(caja__container)
//             })
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }