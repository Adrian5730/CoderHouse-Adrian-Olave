
// LLamo a los elementos necesarios del DOM y demas variables
const carritoLocal = [];
/* Creo la funcion para eliminar un producto del carrito */

const eliminarProductoCarrito = (producto) => {

    $(`#productoCarrito-${producto.id}`).remove()
    const index = carritoLocal.findIndex(productoLocal => parseInt(producto.id) === parseInt(productoLocal.id));
    carritoLocal.splice(index, 1);
    localStorage.setItem("Carrito", JSON.stringify(carritoLocal));
    sumarCarrito();
    
}

// Creo la funcion para que me agrege los productos al carrito
const insertarProductosACarrito = (producto) => {
    $("#carrito").append(`
    <article id="productoCarrito-${producto.id}" class="productoCarrito" >
    <a>
        <div class="product">
            <div class="card__imgproduct">
                <img src="${producto.imagen}" alt="Imagen Producto">
            </div>
            <div class="card-Information">
                <div class="card__title">
                <h2>${producto.titulo}</h2>
                </div>
                <div class="card__envio">
                <p>${producto.envio}</p>
                </div>
                <div class="card__cost">
                <p>$ ${producto.costo}</p>
                </div>
            </div>
        </div>
        <a>
    </article>
    `)

    $(`#productoCarrito-${producto.id}`).append(`
        <button class="boton-eliminar" id="boton-${producto.id}">Eliminar</button>
    `)

    $(`#boton-${producto.id}`).on("click", function(){
        eliminarProductoCarrito(producto);
    });
        
    
    carritoLocal.push(producto);
    localStorage.setItem("Carrito", JSON.stringify(carritoLocal));
    
    sumarCarrito();
}

const sumarCarrito = () => {
    let totalCarrito = 0;
    for (const producto of carritoLocal) {
        totalCarrito = totalCarrito +producto.costo
    }
    localStorage.setItem("totalAPagar", totalCarrito);
}