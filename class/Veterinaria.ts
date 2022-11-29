import Cliente from "./Cliente";
import Paciente from "./Paciente";
import Proveedor from "./Proveedor";
import Sucursal from "./Sucursal";

export default class Veterinaria{
    private cliente: Array<Cliente>;
    private paciente: Array<Paciente>;
    private proveedor: Array<Proveedor>;
    private sucursal: Array<Sucursal>;

    public constructor(cliente:Array<Cliente>,paciente:Array<Paciente>,proveedor:Array<Proveedor>,sucursal:Array<Sucursal>){
        this.cliente=cliente;
        this.paciente=paciente;
        this.proveedor=proveedor;
        this.sucursal=sucursal;
    }

    public getCliente():Array<Cliente>{
        return this.cliente
    }
    public getPaciente():Array<Paciente>{
        return this.paciente
    } 
    public getProveedor():Array<Proveedor>{
        return this.proveedor
    } 
    public getSucursal():Array<Sucursal>{
        return this.sucursal
    }
    public mostrarCliente():void{
        console.log(this.cliente);
    }
    public mostrarPaciente():void{
        console.log(this.paciente);
    }
    public mostrarProveedor():void{
        console.log(this.proveedor);
    }
    public mostrarSucursal():void{
        console.log(this.sucursal);
    }
}