export default class Paciente {
    private id : number;
    private nombre : string;
    private especie : string;

    public constructor(id:number,nombre:string,especie:string){
        this.id=id;
        this.nombre=nombre;
        this.especie=especie;
    }
    public getId (): number{
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getEspecie(): string {
        return this.especie;
    }
    public imprimirPaciente():void{
        console.log(this);
    }

}
