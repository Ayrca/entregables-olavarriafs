import { Mago } from "./mago";

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
export class AsesinoSupremo extends Mago {
    constructor(nombre) {
        super(nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel)

    }
    atqBasico(): void {
        console.log("ataque basico asesino supremo")
    }

    ataqueFurtivo(): string {
        return "ataque de asesino supremo"
    }
}