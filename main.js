// Primera variable.
let ingreso = true;

// Función que genera un ingreso por prompt.
function registro() {

    if (ingreso) {
        let recibirUsuario = prompt("Ingrese su nombre");
        alert("¡Hola " + recibirUsuario + "!.");

    }
    if (ingreso) {
        console.log("Ha ingresado un usuario");
    } else {
        console.log("Ha ocurrido un error");
    }

};

registro();

// Array de objetos.
const productos = [
    {
        id: 1,
        nombre: "GPU NVIDIA RTX 3090 TI",
        precio: 700000,
    },
    {
        id: 2,
        nombre: "GPU NVIDIA RTX 3080 TI",
        precio: 550000,
    },
    {
        id: 3,
        nombre: "GPU NVIDIA RTX 3070 TI",
        precio: 400000,
    },
    {
        id: 4,
        nombre: "GPU NVIDIA RTX 3060 TI",
        precio: 320000,
    },
    {
        id: 5,
        nombre: "GPU NVIDIA RTX 3050 TI",
        precio: 250000
    },

];

console.log(productos);

const gpuTotal = productos.reduce((acc, el) => acc += el.nombre + "\n  ", "\n  ", "\n  ");


// Funcion constructora.
class Producto {
    constructor(array, precio) {

        this.id = productos.length + 1;
        this.array = array;
        this.precio = precio;

    }
};

// Variable y function para agregar un nuevo producto al array y utilizar el metodo find().
// Que se imprima unicamente en consola al no estar en "stock".
const superGpu = new Producto("GPU NVIDIA RTX 4090", 1200000);
productos.push(superGpu);


function megaGpu(array, precio) {
    let mega = array.find(producto => producto.precio > precio);
    return mega
    
};

let proxima = megaGpu(productos, 1100000);
console.log(proxima);


// Funcion para filtrar y crear un nuevo array.

function gpuStock(array, precio) {
    let stock = array.filter(producto => producto.precio > precio && producto !== superGpu);
    return stock
}

let disponible = gpuStock(productos, 380000);

const nombres = disponible.reduce((acc, el) => acc += el.nombre + "\n  ", "\n  ", "\n  ");


// Funcion para filtrar y crear un tercer array.

function gpuBaja(array, precio) {
    let producto = array.filter(producto => producto.precio <= precio);
    return producto
};

let bajoPresupuesto = gpuBaja(productos, 320000);

const gama = bajoPresupuesto.reduce((acc, el) => acc += el.nombre + "\n  ", "\n  ");


// Funcion para mediante prompt simular interaccion con el usuario.

function menu() {

    let option = prompt(
        "Por favor seleccione una opción: \n1 - Presupuesto alto.  \n2 - Presupuesto moderado.   \n3 - Presione 3 para salir."
    )
    switch (option) {
        case "1":
            alert("Presupuesto pretendido entre 400.000 y 700.000")
            alert(nombres)
            break;

        case "2":
            alert("Presupuesto pretendido entre 250.000 y 380.000")
            alert(gama)
            break;

        case "3":
            break;

}

 };

menu();