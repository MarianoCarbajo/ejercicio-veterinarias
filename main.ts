import * as ReadlineSync from 'readline-sync';
import Cliente from "./class/Cliente";
import GestorDeArchivos from "./class/GestorDeArchivos";
import Paciente from "./class/Paciente";
import Proveedor from "./class/Proveedor";
import Sucursal from "./class/Sucursal";
import Veterinaria from './class/Veterinaria';
import {crearCliente, agregarCliente,modificarCliente,borrarCliente,
    crearPaciente, agregarPaciente, modificarPaciente, borrarPaciente,
    crearProveedor, agregarProveedor,modificarProveedor,borrarProveedor, 
    crearSucursal,agregarSucursal,modificarSucursal,borrarSucursal} from './helper';


//---------------------CLIENTES-----------------------------
let datosCliente: GestorDeArchivos = new GestorDeArchivos("./txt/clientes.txt");
let listaClientes : Array<Cliente> = [];
let idPacientes:number[]=[];
for (let i : number= 0; i < datosCliente.getArregloString().length; i++){
    crearCliente(datosCliente.getArregloString()[i], listaClientes);
    idPacientes.push(listaClientes[i].getId());
}

//---------------------PACIENTES----------------------------
let datosPacientes: GestorDeArchivos = new GestorDeArchivos("./txt/pacientes.txt");
let listaPacientes : Array<Paciente> = [];
let idNumero :number;
for (let i : number= 0; i < datosPacientes.getArregloString().length; i++){
    idNumero=idPacientes[i];
    crearPaciente(idNumero, datosPacientes.getArregloString()[i], listaPacientes);
}
//---------------------PROVEEDORES--------------------------
let datosProveedor: GestorDeArchivos = new GestorDeArchivos("./txt/proveedores.txt");
let listaProveedor : Array<Proveedor> = [];
for (let i : number= 0; i < datosProveedor.getArregloString().length; i++){
    crearProveedor(datosProveedor.getArregloString()[i], listaProveedor);
}

//---------------------SUCURSALES---------------------------
let datosSucursal: GestorDeArchivos = new GestorDeArchivos("./txt/sucursales.txt");
let listaSucursales : Array<Sucursal> = [];
for (let i : number= 0; i < datosSucursal.getArregloString().length; i++){
    crearSucursal(datosSucursal.getArregloString()[i], listaSucursales);
}
let nuevaVeterinaria: Veterinaria = new Veterinaria(listaClientes,listaPacientes,listaProveedor,listaSucursales)


// Creo el menu
let ingresarID:number;
let opcion: number=0;
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
  
    opcion = ReadlineSync.questionInt("Elija una opcion: ")
    switch (opcion){
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
              
                opcion = ReadlineSync.questionInt("Elija una opcion: ")
                switch (opcion) {
                  case 1:
                    console.log("Elegiste opción 1");
                    console.log(listaClientes);
                    break;
                  case 2:
                    console.log("Elegiste opción 2");
                    agregarCliente(listaClientes,listaPacientes);
                    break;
                  case 3:
                    console.log("Elegiste opción 3");
                    ingresarID = ReadlineSync.questionInt("id a modificar: ");
                    modificarCliente(ingresarID,listaClientes);
                    break;
                  case 4:
                    console.log("Elegiste opción 4");
                    ingresarID = ReadlineSync.questionInt("id a borrar: ");
                    borrarCliente(ingresarID,listaClientes);  
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
              
              opcion = ReadlineSync.questionInt("Elija una opcion: ")
              switch (opcion) {
                  case 1:
                    console.log("Elegiste opción 1");
                    console.log(listaPacientes);
                  break;
                  case 2:
                    console.log("Elegiste opción 2");
                    agregarPaciente(listaClientes,listaPacientes);
                    break;
                  case 3:
                    console.log("Elegiste opción 3");
                    ingresarID = ReadlineSync.questionInt("id a modificar: ");
                    modificarPaciente(ingresarID,listaPacientes);
                    break;
                  case 4:
                    console.log("Elegiste opción 4");
                    ingresarID = ReadlineSync.questionInt("id a borrar: ");
                    borrarPaciente(ingresarID,listaPacientes);  
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
              
                opcion = ReadlineSync.questionInt("Elija una opcion: ")
                switch (opcion) {
                  case 1:
                    console.log("Elegiste opción 1");
                    console.log(listaProveedor);
                    break;
                  case 2:
                    console.log("Elegiste opción 2");
                    agregarProveedor(listaProveedor);
                    break;
                  case 3:
                    console.log("Elegiste opción 3");
                    ingresarID = ReadlineSync.questionInt("id a modificar: ");
                    modificarProveedor(ingresarID,listaProveedor);
                    break;
                  case 4:
                    console.log("Elegiste opción 4");
                    ingresarID = ReadlineSync.questionInt("id a borrar: ");
                    borrarProveedor(ingresarID,listaProveedor);
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
              
                opcion = ReadlineSync.questionInt("Elija una opcion: ")
                switch (opcion) {
                  case 1:
                    console.log("Elegiste opción 1");
                    console.log(listaSucursales);
                    break;
                  case 2:
                    console.log("Elegiste opción 2");
                    agregarSucursal(listaSucursales);
                    break;
                  case 3:
                    console.log("Elegiste opción 3");
                    ingresarID = ReadlineSync.questionInt("id a modificar: ");
                    modificarSucursal(ingresarID,listaSucursales);
                    break;
                  case 4:
                    console.log("Elegiste opción 4");
                    ingresarID = ReadlineSync.questionInt("id a borrar: ");
                    borrarSucursal(ingresarID,listaSucursales);
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



  






