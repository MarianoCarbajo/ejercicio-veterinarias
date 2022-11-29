export default class Proveedor {
    private id : number;
    private nombre : string;
    private telefono : number;
    
    public constructor(id:number,nombre:string,telefono:number){
        this.id=id;
        this.nombre=nombre;
        this.telefono=telefono;
    }
    public getId (): number{
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getTelefono(): number{
        return this.telefono;
    }

}
