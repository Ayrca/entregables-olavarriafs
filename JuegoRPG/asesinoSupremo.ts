import { Asesino } from "./asesino"

const stats = {
    hp: 15 * 5,
    mana: 60 * 5,
    atqFisico: 10 * 5,
    atqMagico: 8 * 5,
    agilidad: 20 * 5,
    defensa: 6 * 5,
    experiencia: 1 * 5,
    nivel: 1
}
export class AsesinoSupremo extends Asesino {
    constructor(nombre: string, stats: { hp: number; mana: number; atqFisico: number; atqMagico: number; agilidad: number; defensa: number; experiencia: number; nivel: number }) {
        super(nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel);
        this.hp = stats.hp;
        this.mana = stats.mana;
        this.atqFisico = stats.atqFisico;
        this.atqMagico = stats.atqMagico;
        this.agilidad = stats.agilidad;
        this.defensa = stats.defensa;
        this.experiencia = stats.experiencia;
        this.nivel = stats.nivel;
    }


    atqBasico(): void {
        console.log("ataque basico asesino supremo")
    }

    ataqueFurtivo(): string {
        return "ataque de asesino supremo"
    }
}