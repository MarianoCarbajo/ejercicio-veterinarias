"use strict";
exports.__esModule = true;
exports.borrarSucursal = exports.modificarSucursal = exports.agregarSucursal = exports.crearSucursal = exports.borrarProveedor = exports.modificarProveedor = exports.agregarProveedor = exports.crearProveedor = exports.borrarPaciente = exports.modificarPaciente = exports.agregarPaciente = exports.crearPaciente = exports.borrarCliente = exports.modificarCliente = exports.agregarCliente = exports.crearCliente = exports.crearNumRamdom = void 0;
var ReadlineSync = require("readline-sync");
var Cliente_1 = require("./class/Cliente");
var Paciente_1 = require("./class/Paciente");
var Proveedor_1 = require("./class/Proveedor");
var Sucursal_1 = require("./class/Sucursal");
function crearNumRamdom(max) {
    return Math.floor(Math.random() * max);
}
exports.crearNumRamdom = crearNumRamdom;
function validarRamdom(array) {
    var id = crearNumRamdom(1000);
    for (var i = 0; i < array.length; i++) {
        while (id == array[i].getId()) {
            id = crearNumRamdom(1000);
            i = 0;
        }
    }
    return id;
}
function selectorEspecie(tipoEspecie) {
    var especie = "";
    while (tipoEspecie < 1 || tipoEspecie > 3) {
        tipoEspecie = ReadlineSync.questionInt("Ingrese la especie: (1=Perro; 2=Gato; 3=Exotica)");
    }
    switch (tipoEspecie) {
        case 1:
            especie = "Perro";
            break;
        case 2:
            especie = "Gato";
            break;
        case 3:
            especie = "Exotica";
            break;
    }
    return especie;
}
//---------------------CLIENTES-----------------------------
// Función para crear un cliente
function crearCliente(cliente, arrayCliente) {
    var esVip = false;
    var propiedadCliente = cliente.split(',');
    var id = validarRamdom(arrayCliente);
    var nombre = propiedadCliente[0];
    var telefono = Number(propiedadCliente[1]);
    var visitas = Number(propiedadCliente[2]);
    if (visitas >= 5) {
        esVip = true;
    }
    var nuevoCliente = new Cliente_1["default"](id, nombre, telefono, esVip);
    arrayCliente.push(nuevoCliente);
}
exports.crearCliente = crearCliente;
// Función para agregar un nuevo cliente
function agregarCliente(arrayCliente, arrayPaciente) {
    var id = validarRamdom(arrayCliente);
    var nombre = ReadlineSync.question("Ingrese el nombre del cliente: ");
    var telefono = ReadlineSync.questionInt("Ingrese el telefono del cliente: ");
    var esVip = false;
    var nuevoCliente = new Cliente_1["default"](id, nombre, telefono, esVip);
    var nombreMascota = ReadlineSync.question("Ingrese el nombre de la mascota: ");
    var tipoEspecie = ReadlineSync.questionInt("Ingrese la especie: (1=Perro; 2=Gato; 3=Exotica)");
    var especie = selectorEspecie(tipoEspecie);
    var nuevoPaciente = new Paciente_1["default"](id, nombreMascota, especie);
    arrayCliente.push(nuevoCliente);
    arrayPaciente.push(nuevoPaciente);
}
exports.agregarCliente = agregarCliente;
// Función para modificar cliente
function modificarCliente(id, arrayCliente) {
    var noExiste = true;
    for (var i = 0; i < arrayCliente.length; i++) {
        if (id == arrayCliente[i].getId()) {
            var nombre = ReadlineSync.question("Ingrese el nombre del cliente: ");
            var telefono = ReadlineSync.questionInt("Ingrese el telefono del cliente: ");
            var esVip = arrayCliente[i].getEsVip();
            var clienteModificado = new Cliente_1["default"](id, nombre, telefono, esVip);
            delete arrayCliente[i];
            arrayCliente[i] = clienteModificado;
            console.log("El cliente fue modificado");
            noExiste = false;
        }
    }
    if (noExiste)
        console.log("El ID del cliente no existe");
}
exports.modificarCliente = modificarCliente;
// Función para borrar un cliente
function borrarCliente(id, arrayCliente) {
    var noExiste = true;
    for (var i = 0; i < arrayCliente.length; i++) {
        if (id == arrayCliente[i].getId()) {
            arrayCliente.splice(i, 1);
            noExiste = false;
            console.log("El cliente ha sido eliminado");
        }
    }
    if (noExiste)
        console.log("El ID del cliente no existe");
}
exports.borrarCliente = borrarCliente;
//---------------------PACIENTES----------------------------
// Función para crear un paciente
function crearPaciente(idRamdom, paciente, arrayPaciente) {
    var propiedadPaciente = paciente.split(',');
    var id = idRamdom;
    var nombre = propiedadPaciente[0];
    var especie = propiedadPaciente[1];
    var nuevoPaciente = new Paciente_1["default"](id, nombre, especie);
    arrayPaciente.push(nuevoPaciente);
}
exports.crearPaciente = crearPaciente;
// Función para agregar un nuevo cliente
function agregarPaciente(arrayCliente, arrayPaciente) {
    var id = ReadlineSync.questionInt("Ingrese el ID del cliente)");
    var noExiste = true;
    for (var i = 0; i < arrayCliente.length; i++) {
        if (id == arrayCliente[i].getId()) {
            arrayCliente[i].imprimirCliente();
            var nombreMascota = ReadlineSync.question("Ingrese el nombre de la mascota: ");
            var tipoEspecie = ReadlineSync.questionInt("Ingrese la especie: (1=Perro; 2=Gato; 3=Exotica)");
            var especie = selectorEspecie(tipoEspecie);
            var nuevoPaciente = new Paciente_1["default"](id, nombreMascota, especie);
            arrayPaciente.push(nuevoPaciente);
            noExiste = false;
        }
    }
    if (noExiste)
        console.log("El ID del cliente no existe");
}
exports.agregarPaciente = agregarPaciente;
// Función para modificar Paciente
function modificarPaciente(id, arrayPaciente) {
    var noExiste = true;
    for (var i = 0; i < arrayPaciente.length; i++) {
        if (id == arrayPaciente[i].getId()) {
            arrayPaciente[i].imprimirPaciente();
            var pregunta = ReadlineSync.question("Desea modificar este paciente? (Y/N): ");
            if (pregunta == "Y" || pregunta == "y") {
                var nombre = ReadlineSync.question("Ingrese el nombre del cliente: ");
                var tipoEspecie = ReadlineSync.questionInt("Ingrese la especie: (1=Perro; 2=Gato; 3=Exotica)");
                var especie = selectorEspecie(tipoEspecie);
                var pacienteModificado = new Paciente_1["default"](id, nombre, especie);
                delete arrayPaciente[i];
                arrayPaciente[i] = pacienteModificado;
                console.log("El paciente fue modificado");
                noExiste = false;
            }
        }
    }
    if (noExiste)
        console.log("El ID del paciente no existe");
}
exports.modificarPaciente = modificarPaciente;
// Función para borrar un paciente
function borrarPaciente(id, arrayPaciente) {
    var noExiste = true;
    for (var i = 0; i < arrayPaciente.length; i++) {
        if (id == arrayPaciente[i].getId()) {
            arrayPaciente[i].imprimirPaciente();
            var pregunta = ReadlineSync.question("Desea borrar este paciente? (Y/N): ");
            if (pregunta == "Y" || pregunta == "y") {
                arrayPaciente.splice(i, 1);
                noExiste = false;
                console.log("El paciente ha sido eliminado");
            }
        }
    }
    if (noExiste)
        console.log("El ID del paciente no existe");
}
exports.borrarPaciente = borrarPaciente;
//---------------------PROVEEDORES--------------------------
// Función para crear un proveedor
function crearProveedor(proveedor, arrayProveedor) {
    var propiedadProveedor = proveedor.split(',');
    var id = validarRamdom(arrayProveedor);
    var nombre = propiedadProveedor[0];
    var telefono = Number(propiedadProveedor[1]);
    var nuevoProveedor = new Proveedor_1["default"](id, nombre, telefono);
    arrayProveedor.push(nuevoProveedor);
}
exports.crearProveedor = crearProveedor;
// Función para agregar un nuevo proveedor
function agregarProveedor(arrayProveedor) {
    var id = validarRamdom(arrayProveedor);
    var nombre = ReadlineSync.question("Ingrese el nombre del proveedor: ");
    var telefono = ReadlineSync.questionInt("Ingrese el telefono del proveedor: ");
    var nuevoProveedor = new Proveedor_1["default"](id, nombre, telefono);
    arrayProveedor.push(nuevoProveedor);
}
exports.agregarProveedor = agregarProveedor;
// Función para modificar proveedor
function modificarProveedor(id, arrayProveedor) {
    var noExiste = true;
    for (var i = 0; i < arrayProveedor.length; i++) {
        if (id == arrayProveedor[i].getId()) {
            var nombre = ReadlineSync.question("Ingrese el nombre del proveedor: ");
            var telefono = ReadlineSync.questionInt("Ingrese el telefono del proveedor: ");
            var proveedorModificado = new Proveedor_1["default"](id, nombre, telefono);
            delete arrayProveedor[i];
            arrayProveedor[i] = proveedorModificado;
            console.log("El proveedor fue modificado");
            noExiste = false;
        }
    }
    if (noExiste)
        console.log("El ID del proveedor no existe");
}
exports.modificarProveedor = modificarProveedor;
// Función para borrar un proveedor
function borrarProveedor(id, arrayProveedor) {
    var noExiste = true;
    for (var i = 0; i < arrayProveedor.length; i++) {
        if (id == arrayProveedor[i].getId()) {
            arrayProveedor.splice(i, 1);
            noExiste = false;
            console.log("El proveedor ha sido eliminado");
        }
    }
    if (noExiste)
        console.log("El ID del proveedor no existe");
}
exports.borrarProveedor = borrarProveedor;
//---------------------SUCURSALES---------------------------
// Función para crear una sucursal
function crearSucursal(sucursal, arraySucursal) {
    var propiedadSucursal = sucursal.split(',');
    var id = validarRamdom(arraySucursal);
    var nombre = propiedadSucursal[0];
    var direccion = propiedadSucursal[1];
    var nuevoPaciente = new Sucursal_1["default"](id, nombre, direccion);
    arraySucursal.push(nuevoPaciente);
}
exports.crearSucursal = crearSucursal;
// Función para agregar una nueva sucursal
function agregarSucursal(arraySucursal) {
    var id = validarRamdom(arraySucursal);
    var nombre = ReadlineSync.question("Ingrese el nombre de la sucursal: ");
    var direccion = ReadlineSync.question("Ingrese la direccion de la sucursal: ");
    var nuevaSucursal = new Sucursal_1["default"](id, nombre, direccion);
    arraySucursal.push(nuevaSucursal);
}
exports.agregarSucursal = agregarSucursal;
// Función para modificar sucursal
function modificarSucursal(id, arraySucursal) {
    var noExiste = true;
    for (var i = 0; i < arraySucursal.length; i++) {
        if (id == arraySucursal[i].getId()) {
            var nombre = ReadlineSync.question("Ingrese el nombre de la sucursal: ");
            var direccion = ReadlineSync.question("Ingrese la direccion de la sucursal: ");
            var sucursalModificada = new Sucursal_1["default"](id, nombre, direccion);
            delete arraySucursal[i];
            arraySucursal[i] = sucursalModificada;
            console.log("La sucursal fue modificada");
            noExiste = false;
        }
    }
    if (noExiste)
        console.log("El ID de la sucursal no existe");
}
exports.modificarSucursal = modificarSucursal;
// Función para borrar una sucursal
function borrarSucursal(id, arraySucursal) {
    var noExiste = true;
    for (var i = 0; i < arraySucursal.length; i++) {
        if (id == arraySucursal[i].getId()) {
            arraySucursal.splice(i, 1);
            noExiste = false;
            console.log("La sucursal ha sido eliminada");
        }
    }
    if (noExiste)
        console.log("El ID de la sucursal no existe");
}
exports.borrarSucursal = borrarSucursal;
