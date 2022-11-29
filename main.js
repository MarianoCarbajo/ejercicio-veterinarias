"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var GestorDeArchivos_1 = require("./class/GestorDeArchivos");
var Veterinaria_1 = require("./class/Veterinaria");
var helper_1 = require("./helper");
//---------------------CLIENTES-----------------------------
var datosCliente = new GestorDeArchivos_1["default"]("./txt/clientes.txt");
var listaClientes = [];
var idPacientes = [];
for (var i = 0; i < datosCliente.getArregloString().length; i++) {
    (0, helper_1.crearCliente)(datosCliente.getArregloString()[i], listaClientes);
    idPacientes.push(listaClientes[i].getId());
}
//---------------------PACIENTES----------------------------
var datosPacientes = new GestorDeArchivos_1["default"]("./txt/pacientes.txt");
var listaPacientes = [];
var idNumero;
for (var i = 0; i < datosPacientes.getArregloString().length; i++) {
    idNumero = idPacientes[i];
    (0, helper_1.crearPaciente)(idNumero, datosPacientes.getArregloString()[i], listaPacientes);
}
//---------------------PROVEEDORES--------------------------
var datosProveedor = new GestorDeArchivos_1["default"]("./txt/proveedores.txt");
var listaProveedor = [];
for (var i = 0; i < datosProveedor.getArregloString().length; i++) {
    (0, helper_1.crearProveedor)(datosProveedor.getArregloString()[i], listaProveedor);
}
//---------------------SUCURSALES---------------------------
var datosSucursal = new GestorDeArchivos_1["default"]("./txt/sucursales.txt");
var listaSucursales = [];
for (var i = 0; i < datosSucursal.getArregloString().length; i++) {
    (0, helper_1.crearSucursal)(datosSucursal.getArregloString()[i], listaSucursales);
}
var nuevaVeterinaria = new Veterinaria_1["default"](listaClientes, listaPacientes, listaProveedor, listaSucursales);
// Creo el menu
var ingresarID;
var opcion = 0;
while (opcion !== 6) {
    console.log("*********************");
    console.log("* Menu inicial      *");
    console.log("* 1-Clientes        *");
    console.log("* 2-Pacientes       *");
    console.log("* 3-Proveedores     *");
    console.log("* 4-Sucursales      *");
    console.log("* 5-Mostrar todo    *");
    console.log("* 6-Salir           *");
    console.log("*********************");
    opcion = ReadlineSync.questionInt("Elija una opcion: ");
    switch (opcion) {
        case 1:
            while (opcion !== 5) {
                console.log("#####################");
                console.log("# Menu de clientes: #");
                console.log("# 1-Mostrar         #");
                console.log("# 2-Agregar         #");
                console.log("# 3-Modificar       #");
                console.log("# 4-Borrar          #");
                console.log("# 5-Volver          #");
                console.log("#####################");
                opcion = ReadlineSync.questionInt("Elija una opcion: ");
                switch (opcion) {
                    case 1:
                        console.log("Elegiste opción 1");
                        console.log(listaClientes);
                        break;
                    case 2:
                        console.log("Elegiste opción 2");
                        (0, helper_1.agregarCliente)(listaClientes, listaPacientes);
                        break;
                    case 3:
                        console.log("Elegiste opción 3");
                        ingresarID = ReadlineSync.questionInt("id a modificar: ");
                        (0, helper_1.modificarCliente)(ingresarID, listaClientes);
                        break;
                    case 4:
                        console.log("Elegiste opción 4");
                        ingresarID = ReadlineSync.questionInt("id a borrar: ");
                        (0, helper_1.borrarCliente)(ingresarID, listaClientes);
                        break;
                    case 5:
                        break;
                    default:
                        console.log("-----OPCIÓN INCORRECTA-----");
                }
            }
            break;
        case 2:
            while (opcion !== 5) {
                console.log("/////////////////////");
                console.log("/ Menu de Pacientes:/");
                console.log("/ 1-Mostrar         /");
                console.log("/ 2-Agregar         /");
                console.log("/ 3-Modificar       /");
                console.log("/ 4-Borrar          /");
                console.log("/ 5-Volver          /");
                console.log("/////////////////////");
                opcion = ReadlineSync.questionInt("Elija una opcion: ");
                switch (opcion) {
                    case 1:
                        console.log("Elegiste opción 1");
                        console.log(listaPacientes);
                        break;
                    case 2:
                        console.log("Elegiste opción 2");
                        (0, helper_1.agregarPaciente)(listaClientes, listaPacientes);
                        break;
                    case 3:
                        console.log("Elegiste opción 3");
                        ingresarID = ReadlineSync.questionInt("id a modificar: ");
                        (0, helper_1.modificarPaciente)(ingresarID, listaPacientes);
                        break;
                    case 4:
                        console.log("Elegiste opción 4");
                        ingresarID = ReadlineSync.questionInt("id a borrar: ");
                        (0, helper_1.borrarPaciente)(ingresarID, listaPacientes);
                        break;
                    case 5:
                        break;
                    default:
                        console.log("-----OPCIÓN INCORRECTA-----");
                }
            }
            break;
        case 3:
            while (opcion !== 5) {
                console.log("+++++++++++++++++++++");
                console.log("+ Menu proveedores: +");
                console.log("+ 1-Mostrar         +");
                console.log("+ 2-Agregar         +");
                console.log("+ 3-Modificar       +");
                console.log("+ 4-Borrar          +");
                console.log("+ 5-Volver          +");
                console.log("+++++++++++++++++++++");
                opcion = ReadlineSync.questionInt("Elija una opcion: ");
                switch (opcion) {
                    case 1:
                        console.log("Elegiste opción 1");
                        console.log(listaProveedor);
                        break;
                    case 2:
                        console.log("Elegiste opción 2");
                        (0, helper_1.agregarProveedor)(listaProveedor);
                        break;
                    case 3:
                        console.log("Elegiste opción 3");
                        ingresarID = ReadlineSync.questionInt("id a modificar: ");
                        (0, helper_1.modificarProveedor)(ingresarID, listaProveedor);
                        break;
                    case 4:
                        console.log("Elegiste opción 4");
                        ingresarID = ReadlineSync.questionInt("id a borrar: ");
                        (0, helper_1.borrarProveedor)(ingresarID, listaProveedor);
                        break;
                    case 5:
                        break;
                    default:
                        console.log("-----OPCIÓN INCORRECTA-----");
                }
            }
            break;
        case 4:
            while (opcion !== 5) {
                console.log("$$$$$$$$$$$$$$$$$$$$$");
                console.log("$ Menu sucursales:  $");
                console.log("$ 1-Mostrar         $");
                console.log("$ 2-Agregar         $");
                console.log("$ 3-Modificar       $");
                console.log("$ 4-Borrar          $");
                console.log("$ 5-Volver          $");
                console.log("$$$$$$$$$$$$$$$$$$$$$");
                opcion = ReadlineSync.questionInt("Elija una opcion: ");
                switch (opcion) {
                    case 1:
                        console.log("Elegiste opción 1");
                        console.log(listaSucursales);
                        break;
                    case 2:
                        console.log("Elegiste opción 2");
                        (0, helper_1.agregarSucursal)(listaSucursales);
                        break;
                    case 3:
                        console.log("Elegiste opción 3");
                        ingresarID = ReadlineSync.questionInt("id a modificar: ");
                        (0, helper_1.modificarSucursal)(ingresarID, listaSucursales);
                        break;
                    case 4:
                        console.log("Elegiste opción 4");
                        ingresarID = ReadlineSync.questionInt("id a borrar: ");
                        (0, helper_1.borrarSucursal)(ingresarID, listaSucursales);
                        break;
                    case 5:
                        break;
                    default:
                        console.log("-----OPCIÓN INCORRECTA-----");
                }
            }
            break;
        case 5:
            console.log(nuevaVeterinaria);
            break;
        case 6:
            console.log("Gracias, que tengas un lindo día");
            break;
        default:
            console.log("-----OPCIÓN INCORRECTA-----");
    }
}
