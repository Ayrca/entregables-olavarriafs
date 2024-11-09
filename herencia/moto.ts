import { Vehiculo } from "./vehiculo";
type TipoVehiculo = "auto" | "moto" | "camion";
export class Moto extends Vehiculo {
    private cilindrada: number;

    constructor(dominio: string, tipo: TipoVehiculo, modelo: number, cilindrada: number) {
        super(dominio, tipo, modelo)
        this.cilindrada = cilindrada;
    }
    public getCilindrada(): number {
        return this.cilindrada;
    }
    public estado(): void {
        if (this.modelo > 2013) {
            return console.log("el vehiculo esta en buen estado");
        } else {
            return console.log("el vehiculo esta viejo");
        }
    }

}