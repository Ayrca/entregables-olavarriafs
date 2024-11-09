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
    public estado(): void {
        if (this.modelo > 2013) {
            console.log("el vehiculo esta en buen estado")
        } else {
            console.log("el vehiculo esta viejo")
        }
    }
}