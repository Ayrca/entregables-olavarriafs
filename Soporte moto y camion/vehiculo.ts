export { Vehiculo }
type TipoVehiculo = "auto" | "moto" | "camion";
class Vehiculo {
    protected dominio: string;
    protected tipo: TipoVehiculo;
    protected modelo: number;

    constructor(dominio: string, tipo: TipoVehiculo, modelo: number) {
        this.dominio = dominio;
        this.tipo = tipo;
        this.modelo = modelo;

    }
    public getDominio() {
        return this.dominio;
    }
    public getModelo() {
        return this.modelo;
    }
    public getTipo() {
        return this.tipo;
    }
    setDominio(dominio: string): void {
        this.dominio = dominio
    }
    setModelo(modelo: number): void {
        this.modelo = modelo
    }
    setTipo(tipo: TipoVehiculo): void {
        this.tipo = tipo
    }
}

