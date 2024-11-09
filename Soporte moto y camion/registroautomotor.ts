export { Registroautomotor }
import { Vehiculo } from "./vehiculo"
import { Registro } from "./registro";
import { Moto } from "./moto";
import { Camion } from "./camion";

type TipoVehiculo = "auto" | "moto" | "camion";
class Registroautomotor {

    private nombre: string;

    private listaRegistros: Registro[];

    constructor(nombre: string, listaRegistros: Registro[] = [],) {
        this.nombre = nombre;
        this.listaRegistros = listaRegistros;


    }
    public getNombre(): string {// controlar lo que enviamos*
        return this.nombre;
    }

    public getListaregistros(): Registro[] {//*
        const copiaVehiculo: Registro[] = this.listaRegistros.map(reg => ({ ...reg }) as Registro)//map asigna una f callback a cada libro ...(es un spread)
        return copiaVehiculo;
    }

    public agregarRegistro(titular: string, arba: boolean, alta: boolean, vehiculo: Vehiculo): void {
        let nuevoregistro: Registro = new Registro(titular, arba, alta, vehiculo);
        if (!this.listaRegistros.some(reg =>
            reg.getVehiculo().getDominio() == vehiculo.getDominio()
        )) {
            this.listaRegistros.push(nuevoregistro)
        }
    }
    public eliminarRegistro(dominio: string): void {

        const posRegistro: number = this.listaRegistros.findIndex(reg => reg.getVehiculo().getDominio() === dominio);//indexof devuelve posicion
        if (posRegistro != -1) {
            this.listaRegistros.splice(posRegistro, 1);//metodo slice corta un trozo de array
        }
    }

    public modificarRegistro(dominio: string, titular: string, arba: boolean, alta: boolean): void {
        const posRegistro: number = this.listaRegistros.findIndex(reg => reg.getVehiculo().getDominio() === dominio);
        if (posRegistro !== -1) {
            const registroExistente = this.listaRegistros[posRegistro];
            registroExistente.setRegistro(titular, arba, alta);
        }
    }
}    