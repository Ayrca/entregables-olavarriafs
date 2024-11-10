import { MagoSupremo } from "./magoSupremo";
import { Personaje } from "./personaje";
const stats = {
    hp: 10,
    mana: 100,
    atqFisico: 3,
    atqMagico: 50,
    agilidad: 7,
    defensa: 5,
    experiencia: 1,
    nivel: 1
}
export class Mago extends Personaje {
    constructor(nombre: string) {
        super(nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel)
    }

    atqBasico(): void {
        console.log("ataque basico mago")
    }
    evolucionar(): Personaje {
        const statsMagoSupremo = {
            hp: stats.hp * 5,
            mana: stats.mana * 5,
            atqFisico: stats.atqFisico * 5,
            atqMagico: stats.atqMagico * 5,
            agilidad: stats.agilidad * 5,
            defensa: stats.defensa * 5,
            experiencia: stats.experiencia * 5,
            nivel: stats.nivel,
        };
        return new MagoSupremo(this.nombre, statsMagoSupremo);
    }

}