//Creo las variables necesarias
const URL = "js/json/productos.json";

//Creo el arrray con todos los productos
const productos = [
    {
        id: 1,
        titulo: "Picadora de Carne Cuk By Gadnic P90 Eléctrica 2000w 80kg/h",
        envio: "Envio Gratis",
        costo: 12.999,
        imagen: "images/productos/PICA0001X.webp"
    },
    {
        id: 2,
        titulo: "Impresora 3D Creality Ender 3 Pro Original FDM",
        envio: "Envio Gratis",
        costo: 37.999,
        imagen: "images/productos/IMP3D001.webp"
    },
    {
        id: 3,
        titulo: "Camara de Seguridad Gadnmic 636PRO IP WIFI 1080P HD",
        envio: "Envio Gratis",
        costo: 3.999,
        imagen: "images/productos/P2P00013X.jpg"
    },
    {
        id: 4,
        titulo: "Drone DJI Mavic Mini 2 Single Cámara 4K 30fps 10km Alcance Estabilizador de 3 Ejes",
        envio: "Envio Gratis",
        costo: 85.999,
        imagen: "images/productos/DRDJI017.webp"
    },
    {
        id: 5,
        titulo: "Tablet Gadnic Fenix Phone Gamer 4G LTE Quadcore 32gb 2gb 10 IPS",
        envio: "Envio Gratis",
        costo: 22.549,
        imagen: "images/productos/TAB0024D.jpg"
    },
    {
        id: 6,
        titulo: "Tablet Samsung Galaxy Tab A7 T500 OctaCore 3gb 64gb 10,4 Full HD+",
        envio: "Envio $500",
        costo: 37.149,
        imagen: "images/productos/TABSAM5G.jpg"
    },
    {
        id: 7,
        titulo: "Contadora De Billetes Gadnic MC-01 Profesional 1000 Bill/Min Homologada Detecta Falsos",
        envio: "Envio $ 500",
        costo: 13.999,
        imagen: "images/productos/CONT001.jpg"
    },
    {
        id: 8,
        titulo: "Gazebo Gadnic 3X3-M Plegable 3x3 Reforzado Paredes con Ventana Ideal Playa o Eventos",
        envio: "Envio Gratis",
        costo: 19.399,
        imagen: "images/productos/GAZEBO01.jpg"
    },
    {
        id: 9,
        titulo: "Notebook Bangho Max L5 Intel Core i7-1065G7 8gb Ssd 480gb 15,6 Pulgadas",
        envio: "Envio Gratis",
        costo: 111.799,
        imagen: "images/productos/NOT00191.jpg"
    },
    {
        id: 10,
        titulo: "Proyector Gadnic Iron Style Wifi 5500 Lúmenes Android USB HDMI Sinto TV",
        envio: "Envio Gratis",
        costo: 38.099,
        imagen: "images/productos/PROJ0032.jpg"
    },
    {
        id: 11,
        titulo: "Tablet Gadnic Phone-7 Gamer 3G Quadcore 32gb 2gb 7 IPS",
        envio: "Envio $ 500",
        costo: 85.999,
        imagen: "images/productos/PROJ0032.jpg"
    },
    {
        id: 12,
        titulo: "Celular LG K22+ Azul 64Gb 3Gb Ram 6,2 HD Quad Core",
        envio: "Envio Gratis",
        costo: 21.099,
        imagen: "images/productos/CELLGK25.webp"
    },
    {
        id: 13,
        titulo: "Soldadora Inverter Gadnic Tools SI120 Eléctrica 120 Amp 3000w + Máscara + Electrodos",
        envio: "Envio Gratis",
        costo: 10.649,
        imagen: "images/productos/SOLD0005.webp"
    },
    {
        id: 14,
        titulo: "Aspiradora Robot Gadnic Z970 Trapeadora Inteligente",
        envio: "Envio Gratis",
        costo: 99.999,
        imagen: "images/productos/ROB00080.webp"
    },
    {
        id: 15,
        titulo: "Drone DJI Mavic Air 2 Fly More Combo c/ Cámara 4K 48Mpx HDR Vuelo Seguro APAS 3.0",
        envio: "Envio Gratis",
        costo: 199.999,
        imagen: "images/productos/DRDJI018.webp"
    },
    {
        id: 16,
        titulo: "Motherboard Gigabyte H410M-H Intel 10 Gen Socket LGA 1200",
        envio: "Envio Gratis",
        costo: 12.649,
        imagen: "images/productos/MOTH0125.webp"
    }
]

// LLamo a los elementos necesarios del DOM
const prodocutoLocalStorage = JSON.parse(localStorage.getItem("Carrito"))

// Creo la funcion para que agregue todos los productos del array


const agregarProductos = () => {
    $.get(URL, (respuesta, estado) => {
        if( estado === "success"){
            for (const producto of respuesta) {
                $("#products").append(`
                <article id="${producto.id}" class="cardProduct" data-aos="fade-up" data-aos-duration="1200" >
                    <div class="product" >
                        <a href="#">
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
                        </a>
                    </div>
                </article>
                `)
        
                $(`#${producto.id}`).on("click", function(){
                    insertarProductosACarrito(producto)
                })
            }
        }
    })
}


//LLamo a la funcion
agregarProductos();

if (prodocutoLocalStorage !== null) {
    
    for (const producto of prodocutoLocalStorage) {
        insertarProductosACarrito(producto);
    }
  }
