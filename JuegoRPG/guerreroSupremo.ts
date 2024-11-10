import { Mago } from "./mago";

const stats = {
    hp: 20 * 5,
    mana: 40 * 5,
    atqFisico: 8 * 5,
    atqMagico: 10 * 5,
    agilidad: 8 * 5,
    defensa: 10 * 5,
    experiencia: 1 * 5,
    nivel: 1
}
export class GuerreroSupremo extends Mago {
    constructor(nombre) {
        super(nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel)
    }
    atqBasico(): void {
        console.log("ataque basico guerrero supremo")
    }
    cargaMortal(): string {
        return "ataque fisico supremo"
    }
}