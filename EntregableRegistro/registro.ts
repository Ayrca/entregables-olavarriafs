import { Vehiculo } from "./vehiculo";

export { Registro }
type TipoVehiculo = "auto" | "moto" | "camion";
class Registro {
    private titular: string;
    private arba: boolean;
    private alta: boolean;
    private vehiculo: Vehiculo;

    constructor(titular: string, arba: boolean, alta: boolean, vehiculo: Vehiculo) {
        this.titular = titular;
        this.arba = arba !== undefined ? arba : false;
        this.alta = alta !== undefined ? alta : false;
        this.vehiculo = vehiculo;
    }
    public getTitular(): string {
        return this.titular;
    }
    public getArba(): boolean {
        return this.arba;
    }
    public getAlta(): boolean {
        return this.alta;
    }
    public getVehiculo(): Vehiculo {
        return this.vehiculo;
    }
    public setArba(arba: boolean): void {
        this.arba = arba;
    }
    public setAlta(alta: boolean): void {
        this.alta = alta;
    }
    public setVehiculo(dominio: string, tipo: TipoVehiculo, modelo: number): void {
        this.vehiculo.setDominio(dominio);
        this.vehiculo.setTipo(tipo);
        this.vehiculo.setModelo(modelo);
    }
}