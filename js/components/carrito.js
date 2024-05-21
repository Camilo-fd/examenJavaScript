export const getAllCarrito = async() => {
    const variable = await fetch("http://172.16.101.146:5999/carrito")
    const data = await variable.json()
    
}