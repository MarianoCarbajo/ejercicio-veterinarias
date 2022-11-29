export default class Sucursal {
    private id : number;
    private nombre : string;
    private direccion : string;

    public constructor(id:number,nombre:string,direccion:string){
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
    }
    public getId (): number{
        return this.id;
    }
    public getNombre ():string{
        return this.nombre;
    }
    public getDireccion(): string {
        return this.direccion;
    }

}
