import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo {
    private cargaMaxima: number;
    constructor(dominio: string, cargaMaxima: number, tipo, modelo) {
        super(dominio, tipo, modelo)
        this.cargaMaxima = cargaMaxima;
    }
    public getCargaMaxima(): number {
        return this.cargaMaxima;
    }
}