import { Vehiculo } from "./vehiculo";
type TipoVehiculo = "auto" | "moto" | "camion";
export class Camion extends Vehiculo {
    private cargaMaxima: number;
    constructor(dominio: string, tipo: TipoVehiculo, modelo: number, cargaMaxima: number) {
        super(dominio, tipo, modelo)
        this.cargaMaxima = cargaMaxima;
    }
    public getCargaMaxima(): number {
        return this.cargaMaxima;
    }
}