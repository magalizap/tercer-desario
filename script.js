const usuario = {user: prompt("Ingrese su nombre")}

bienvenida.innerHTML = `Bienvenido/a ${usuario.user}, mira los productos que tenemos para vos!`


class Instrumento {
    constructor(id, imagen, tipo, nombre, caracteristicas, precio, oferta){
        this.id = id;
        this.imagen = imagen;
        this.tipo = tipo;
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
    }
}

const instrumento1 = new Instrumento (1,"img/chello.jpg","cuerda", "Chello", "Incluye funda y dos arcos", 135000)
const instrumento2 = new Instrumento(2,'img/flauta-traversa.jpg', "viento", "Flauta traversa", "Fabricada en cuproníquel", 36871)
const instrumento3 = new Instrumento(3,"img/bateria.webp","percusion","Bateria", "De 4 Cuerpos Sensitiva", 212260)
const instrumento4 = new Instrumento(4,"img/piano.jpg", "electrico", "Piano electrico", "88 teclas tipo martillo", 93710)

const instrumentos = [instrumento1, instrumento2, instrumento3, instrumento4]

console.log(instrumentos)

const divShop = document.getElementById("shop")

instrumentos.forEach(instrumentoArray => {
    divShop.innerHTML += `
    <div class="card shop" id="shop ${instrumentoArray.id}" style="width: 18rem;">
        <img src="${instrumentoArray.imagen}" class="card-img-top" >
            <div class="card-body shop">
            <h5 class="card-title">${instrumentoArray.nombre}</h5>
            <p class="card-text">Tipo:${instrumentoArray.tipo}</p>
            <p class="card-text">${instrumentoArray.caracteristicas}</p>
            <p class="card-text">$${instrumentoArray.precio}</p>
            <a href="#" class="btn btn-secondary">Agregar al Carrito</a>
        </div>
    </div>
    
    `
})