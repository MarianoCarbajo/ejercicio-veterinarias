export default class Cliente {
    private id : number;
    private nombre : string;
    private telefono : number;
    private esVip : boolean;

    public constructor(id:number,nombre:string,telefono:number,esVip:boolean){
        this.id=id;
        this.nombre=nombre;
        this.telefono=telefono;
        this.esVip=esVip;
    }

    public getId() : number {
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getTelefono() : number{
        return this.telefono;
    }
    public imprimirCliente():void{
        console.log(this);
    }
    public getEsVip ():boolean{
        return this.esVip;
    }
}