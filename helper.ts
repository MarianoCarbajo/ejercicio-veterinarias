import * as ReadlineSync from 'readline-sync';
import Cliente from "./class/Cliente";
import Paciente from "./class/Paciente";
import Proveedor from "./class/Proveedor";
import Sucursal from "./class/Sucursal";

export function crearNumRamdom(max :number):number {
    return Math.floor(Math.random() * max); 
}
function validarRamdom (array):number{
    let id:number=crearNumRamdom(1000);
    for (let i : number =0; i < array.length; i++){  
        while (id == array[i].getId()){
            id = crearNumRamdom(1000);
            i=0
        }
    }return id;
}
function selectorEspecie (tipoEspecie:number):string{
    let especie:string="";
    while (tipoEspecie <1 || tipoEspecie>3){
        tipoEspecie= ReadlineSync.questionInt("Ingrese la especie: (1=Perro; 2=Gato; 3=Exotica)");
    }
    switch (tipoEspecie){
        case 1:
                especie="Perro";
            break;
        case 2:
                especie="Gato";
            break;
        case 3:
                especie="Exotica";
            break;
    }
    return especie;
}
//---------------------CLIENTES-----------------------------
// Función para crear un cliente
export function crearCliente (cliente: string, arrayCliente: Array<Cliente>) : void{
    let esVip:boolean=false;
    let propiedadCliente : string[] = cliente.split(',');
    let id:number=validarRamdom(arrayCliente);
    let nombre: string = propiedadCliente[0];
    let telefono: number = Number(propiedadCliente[1]);
    let visitas: number= Number(propiedadCliente[2]);
    if (visitas>=5){
        esVip=true;  
    }
    let nuevoCliente : Cliente = new Cliente(id,nombre,telefono,esVip);

    arrayCliente.push(nuevoCliente);
}
// Función para agregar un nuevo cliente
export function agregarCliente(arrayCliente: Array<Cliente>,arrayPaciente:Array<Paciente>){
    let id:number=validarRamdom(arrayCliente);
    let nombre: string= ReadlineSync.question("Ingrese el nombre del cliente: ");
    let telefono: number= ReadlineSync.questionInt("Ingrese el telefono del cliente: ");
    let esVip: boolean= false;
    let nuevoCliente: Cliente = new Cliente(id,nombre,telefono,esVip);
    let nombreMascota: string= ReadlineSync.question("Ingrese el nombre de la mascota: ");
    let tipoEspecie: number= ReadlineSync.questionInt("Ingrese la especie: (1=Perro; 2=Gato; 3=Exotica)");
    let especie:string=selectorEspecie(tipoEspecie);
    let nuevoPaciente: Paciente= new Paciente(id,nombreMascota,especie);
    arrayCliente.push(nuevoCliente);
    arrayPaciente.push(nuevoPaciente);
}
// Función para modificar cliente
export function modificarCliente (id:number, arrayCliente: Array<Cliente>){
    let noExiste:boolean=true;
    for (let i:number=0;i<arrayCliente.length;i++){
        if (id==arrayCliente[i].getId()){
            let nombre: string= ReadlineSync.question("Ingrese el nombre del cliente: ");
            let telefono: number= ReadlineSync.questionInt("Ingrese el telefono del cliente: ");
            let esVip: boolean= arrayCliente[i].getEsVip();
            let clienteModificado: Cliente = new Cliente(id,nombre,telefono,esVip);
            delete arrayCliente[i];
            arrayCliente[i] = clienteModificado;
            console.log("El cliente fue modificado");
            noExiste=false;
        }   
    } if (noExiste)
    console.log("El ID del cliente no existe");
}
// Función para borrar un cliente
export function borrarCliente (id:number, arrayCliente: Array<Cliente>, arrayPaciente: Array<Paciente>){
    let noExiste:boolean=true;
    for (let i : number =0; i < arrayCliente.length; i++){  
        if (id==arrayCliente[i].getId()){
            arrayCliente.splice(i, 1);
            noExiste=false;
            for (let j :number=0; j<arrayPaciente.length; j++){
                if (id==arrayPaciente[j].getId()){
                    arrayPaciente.splice(j,1);
                }
            }
            console.log("El cliente ha sido eliminado");
        }
    } if (noExiste)
    console.log("El ID del cliente no existe");
}

//---------------------PACIENTES----------------------------
// Función para crear un paciente
export function crearPaciente (idRamdom:number, paciente: string, arrayPaciente: Array<Paciente>) : void{
    let propiedadPaciente : string[] = paciente.split(',');
    let id: number = idRamdom;
    let nombre: string = propiedadPaciente[0];
    let especie: string = propiedadPaciente[1];
    let nuevoPaciente : Paciente = new Paciente(id,nombre,especie);

    arrayPaciente.push(nuevoPaciente);
}
// Función para agregar un nuevo paciente
export function agregarPaciente(arrayCliente: Array<Cliente>, arrayPaciente:Array<Paciente>){
    let id:number= ReadlineSync.questionInt("Ingrese el ID del cliente)");
    let noExiste:boolean=true;
    for (let i:number=0; i < arrayCliente.length; i++){
        if (id==arrayCliente[i].getId()){
            arrayCliente[i].imprimirCliente();
            let nombreMascota: string= ReadlineSync.question("Ingrese el nombre de la mascota: ");
            let tipoEspecie: number= ReadlineSync.questionInt("Ingrese la especie: (1=Perro; 2=Gato; 3=Exotica)");
            let especie:string=selectorEspecie(tipoEspecie);
            let nuevoPaciente: Paciente= new Paciente(id,nombreMascota,especie);
            arrayPaciente.push(nuevoPaciente);
            noExiste=false;
        }
    } if (noExiste)
    console.log("El ID del cliente no existe");   
}
// Función para modificar Paciente
export function modificarPaciente (id:number, arrayPaciente: Array<Paciente>){
    let noExiste:boolean=true;
    for (let i:number=0;i<arrayPaciente.length;i++){
        if (id==arrayPaciente[i].getId()){
            arrayPaciente[i].imprimirPaciente();
            let pregunta: string= ReadlineSync.question("Desea modificar este paciente? (Y/N): ");
            if (pregunta=="Y"||pregunta=="y"){
                let nombre: string= ReadlineSync.question("Ingrese el nombre del cliente: ");
                let tipoEspecie: number= ReadlineSync.questionInt("Ingrese la especie: (1=Perro; 2=Gato; 3=Exotica)");
                let especie:string=selectorEspecie(tipoEspecie);
                let pacienteModificado: Paciente = new Paciente(id,nombre,especie);
                delete arrayPaciente[i];
                arrayPaciente[i] = pacienteModificado;
                console.log("El paciente fue modificado");
                noExiste=false;
            }            
        }   
    } if (noExiste)
    console.log("El ID del paciente no existe");
}
// Función para borrar un paciente
export function borrarPaciente (id:number, arrayPaciente: Array<Paciente>){
    let noExiste:boolean=true;
    for (let i : number =0; i < arrayPaciente.length; i++){  
        if (id==arrayPaciente[i].getId()){
            arrayPaciente[i].imprimirPaciente();
            let pregunta: string= ReadlineSync.question("Desea borrar este paciente? (Y/N): ");
            if (pregunta=="Y"||pregunta=="y"){
                arrayPaciente.splice(i, 1);
                noExiste=false;
                console.log("El paciente ha sido eliminado");
            }
        }
    } if (noExiste)
    console.log("El ID del paciente no existe");
}

//---------------------PROVEEDORES--------------------------
// Función para crear un proveedor
export function crearProveedor (proveedor: string, arrayProveedor: Array<Proveedor>) : void{
    let propiedadProveedor : string[] = proveedor.split(',');
    let id :number=validarRamdom(arrayProveedor);
    let nombre: string = propiedadProveedor[0];
    let telefono: number = Number(propiedadProveedor[1]);
    let nuevoProveedor : Proveedor = new Proveedor(id,nombre,telefono);

    arrayProveedor.push(nuevoProveedor);
}
// Función para agregar un nuevo proveedor
export function agregarProveedor (arrayProveedor: Array<Proveedor>){
    let id:number=validarRamdom(arrayProveedor);
    let nombre: string= ReadlineSync.question("Ingrese el nombre del proveedor: ");
    let telefono: number= ReadlineSync.questionInt("Ingrese el telefono del proveedor: ");
    let nuevoProveedor: Proveedor = new Proveedor(id,nombre,telefono);
    arrayProveedor.push(nuevoProveedor);
}
// Función para modificar proveedor
export function modificarProveedor (id:number, arrayProveedor: Array<Proveedor>){
    let noExiste:boolean=true;
    for (let i:number=0;i<arrayProveedor.length;i++){
        if (id==arrayProveedor[i].getId()){
            let nombre: string= ReadlineSync.question("Ingrese el nombre del proveedor: ");
            let telefono: number= ReadlineSync.questionInt("Ingrese el telefono del proveedor: ");
            let proveedorModificado: Proveedor = new Proveedor(id,nombre,telefono);
            delete arrayProveedor[i];
            arrayProveedor[i] = proveedorModificado;
            console.log("El proveedor fue modificado");
            noExiste=false;
        }   
    } if (noExiste)
    console.log("El ID del proveedor no existe");
}
// Función para borrar un proveedor
export function borrarProveedor (id:number, arrayProveedor: Array<Proveedor>){
    let noExiste:boolean=true;
    for (let i : number =0; i < arrayProveedor.length; i++){  
        if (id==arrayProveedor[i].getId()){
            arrayProveedor.splice(i, 1);
            noExiste=false;
            console.log("El proveedor ha sido eliminado");
        }
    } if (noExiste)
    console.log("El ID del proveedor no existe");
}

//---------------------SUCURSALES---------------------------
// Función para crear una sucursal
export function crearSucursal (sucursal: string, arraySucursal: Array<Sucursal>) : void{
    let propiedadSucursal : string[] = sucursal.split(',');
    let id:number=validarRamdom(arraySucursal);
    let nombre: string = propiedadSucursal[0];
    let direccion: string = propiedadSucursal[1];
    let nuevoPaciente : Sucursal = new Sucursal(id,nombre,direccion);

    arraySucursal.push(nuevoPaciente);
}
// Función para agregar una nueva sucursal
export function agregarSucursal (arraySucursal: Array<Sucursal>){
    let id:number=validarRamdom(arraySucursal);
    let nombre: string= ReadlineSync.question("Ingrese el nombre de la sucursal: ");
    let direccion: string= ReadlineSync.question("Ingrese la direccion de la sucursal: ");
    let nuevaSucursal: Sucursal = new Sucursal(id,nombre,direccion);
    arraySucursal.push(nuevaSucursal);
}
// Función para modificar sucursal
export function modificarSucursal (id:number, arraySucursal: Array<Sucursal>){
    let noExiste:boolean=true;
    for (let i:number=0;i<arraySucursal.length;i++){
        if (id==arraySucursal[i].getId()){
            let nombre: string= ReadlineSync.question("Ingrese el nombre de la sucursal: ");
            let direccion: string= ReadlineSync.question("Ingrese la direccion de la sucursal: ");
            let sucursalModificada: Sucursal = new Sucursal(id,nombre,direccion);
            delete arraySucursal[i];
            arraySucursal[i] = sucursalModificada;
            console.log("La sucursal fue modificada");
            noExiste=false;
        }   
    } if (noExiste)
    console.log("El ID de la sucursal no existe");
}
// Función para borrar una sucursal
export function borrarSucursal (id:number, arraySucursal: Array<Sucursal>){
    let noExiste:boolean=true;
    for (let i : number =0; i < arraySucursal.length; i++){  
        if (id==arraySucursal[i].getId()){
            arraySucursal.splice(i, 1);
            noExiste=false;
            console.log("La sucursal ha sido eliminada");
        }
    } if (noExiste)
    console.log("El ID de la sucursal no existe");
}