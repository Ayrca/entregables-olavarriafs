import { Personaje } from "./personaje";
import { AsesinoSupremo } from "./asesinoSupremo";
const stats = {
    hp: 15,
    mana: 60,
    atqFisico: 10,
    atqMagico: 8,
    agilidad: 20,
    defensa: 6,
    experiencia: 1,
    nivel: 1,
}
export class Asesino extends Personaje {
    constructor(nombre: string,
        hp: number,
        mana: number,
        atqFisico: number,
        atqMagico: number,
        agilidad: number,
        defensa: number,
        experiencia: number,
        nivel: number) {
        super(nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel)
    }

    atqBasico(): void {
        console.log("ataque basico asesino")
    }
    evolucionar(): Personaje {
        return new AsesinoSupremo(stats)
    }
}
