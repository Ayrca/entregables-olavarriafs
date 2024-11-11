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
    constructor(
        nombre: string,
        hp: number = stats.hp,
        mana: number = stats.mana,
        atqFisico: number = stats.atqFisico,
        atqMagico: number = stats.atqMagico,
        agilidad: number = stats.agilidad,
        defensa: number = stats.defensa,
        experiencia: number = stats.experiencia,
        nivel: number = stats.nivel
    ) {
        super(nombre, hp, mana, atqFisico, atqMagico, agilidad, defensa, experiencia, nivel);
    }

    atqBasico(): void {
        console.log("ataque basico guerrero")
    }
    evolucionar(): GuerreroSupremo {
        const statsGuerreroSupremo = {
            hp: stats.hp * 5,
            mana: stats.mana * 5,
            atqFisico: stats.atqFisico * 5,
            atqMagico: stats.atqMagico * 5,
            agilidad: stats.agilidad * 5,
            defensa: stats.defensa * 5,
            experiencia: stats.experiencia * 5,
            nivel: stats.nivel,
        };
        return new GuerreroSupremo(this.nombre, statsGuerreroSupremo);
    }
}

