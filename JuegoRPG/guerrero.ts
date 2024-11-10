import { Personaje } from "./personaje";
import { GuerreroSupremo } from "./guerreroSupremo";
const stats = {
    hp: 20,
    mana: 40,
    atqFisico: 8,
    atqMagico: 10,
    agilidad: 8,
    defensa: 10,
    experiencia: 1,
    nivel: 1
}
export class Guerrero extends Personaje {
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
        console.log("ataque basico guerrero")
    }
    evolucionar(): Personaje {
        return new GuerreroSupremo(stats)
    }
}
