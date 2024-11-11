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
        const statsAsesinoSupremo = {
            hp: stats.hp * 5,
            mana: stats.mana * 5,
            atqFisico: stats.atqFisico * 5,
            atqMagico: stats.atqMagico * 5,
            agilidad: stats.agilidad * 5,
            defensa: stats.defensa * 5,
            experiencia: stats.experiencia * 5,
            nivel: stats.nivel,
        };
        return new AsesinoSupremo(this.nombre, statsAsesinoSupremo)
    }
}
