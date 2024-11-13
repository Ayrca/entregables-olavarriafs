
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

    constructor(nombre: string,
        hp: number = stats.hp,
        mana: number = stats.mana,
        atqFisico: number = stats.atqFisico,
        atqMagico: number = stats.atqMagico,
        agilidad: number = stats.agilidad,
        defensa: number = stats.defensa,
        experiencia: number = stats.experiencia,
        nivel: number = stats.nivel) {
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
        console.log("Ha nacido un nuevo Mago Supremo")
        return new MagoSupremo(this.nombre, statsMagoSupremo);

    }
}

export class MagoSupremo extends Mago {
    constructor(nombre: string, stats: { hp: number; mana: number; atqFisico: number; atqMagico: number; agilidad: number; defensa: number; experiencia: number; nivel: number }) {
        super(nombre);
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
        console.log("ataque basico mago supremo")
    }
    lanzaFuego(): string {
        return "ataque magico de fuego"
    }
}