import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo {
    private cilindrada: number;
    constructor(dominio: string, cilindrada: number, tipo, modelo) {
        super(dominio, tipo, modelo)
        this.cilindrada = cilindrada;
    }
    public getCilindrada(): number {
        return this.cilindrada;
    }
}