// let id;
// let nombre;
// let costo;
// let nuevoProducto;
// let menu;
// let mensaje = "Lista:";
// let carrito = []
// class producto {
//     constructor(id, nombre, costo){
//         this.id = id;
//         this.nombre = nombre;
//         this.costo = costo;
//     }
// }

// let mostrarCarrito = () =>{
//     console.log(typeof carrito)
//     if (carrito.length === 0) { 
//         alert("No tienes ningun producto")
//     }
//     for( productos of carrito ){
//         console.log("hola" + productos.nombre)
//         alert(`${mensaje}\n ${productos.id} ${productos.nombre} ${productos.costo}`)
//     }
//     bienvenida()
// }

// let anadirAlCarrito = () =>{
//     do {
//         id = parseInt(prompt("Ingresa el indice del producto"));
//     } while (isNaN(id));

//     do {
//         nombre = prompt("Ingresa el nombre del producto");
//     } while (nombre=="");

//     do {
//         costo = parseInt(prompt("Ingresa el costo del producto"));
//     } while (isNaN(costo));
//     nuevoProducto = new producto(id, nombre, costo)
//     carrito.push(nuevoProducto)
//     console.log(carrito)
//     alert("El producto fue añadido a tu carrito")
//     bienvenida()
// }

// let eliminarCarrito = () => {
//     do{
//         coonfirmacion = prompt("Si quiere eliminar el carrito coloque 'y'").toLowerCase()
//     }while(coonfirmacion == "" || coonfirmacion == null)
//     if(coonfirmacion=="y"){
//         carrito = []       
//     }
//     bienvenida()
// }

// let bienvenida = () =>{
//     do {
//         menu = parseInt(prompt("Ingresa un numero segun que quieras hacer \n 1. Ver el carrito \n 2. Añadir un producto al carrito \n 3. Eliminar del carrito \n"));
//     } while (isNaN(menu));
//     eleccion(menu)
// }


// let eleccion = (menu) =>{
//     switch (menu) {
//         case 1:
//             mostrarCarrito();
//             break;
//         case 2:
//             anadirAlCarrito();
//         case 3:
//             eliminarCarrito();
//         default:
//             break;
//     }
// }

// bienvenida()

const iconCarBuy = document.getElementById("carrito")
const cardProducts = document.getElementsByClassName("cardProduct")


const agregarAlCarrito = () => {
     console.log("hola");
}

for( cardProduct of cardProducts){
    console.log(cardProduct)
    
}


