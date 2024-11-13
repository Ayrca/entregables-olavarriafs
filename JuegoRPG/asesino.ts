import { Personaje } from "./personaje";

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

const stats1 = {
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
    constructor(nombre: string, stats1: { hp: number; mana: number; atqFisico: number; atqMagico: number; agilidad: number; defensa: number; experiencia: number; nivel: number }) {
        super(nombre, stats1.hp, stats1.mana, stats1.atqFisico, stats1.atqMagico, stats1.agilidad, stats1.defensa, stats1.experiencia, stats1.nivel);
        this.hp = stats1.hp;
        this.mana = stats1.mana;
        this.atqFisico = stats1.atqFisico;
        this.atqMagico = stats1.atqMagico;
        this.agilidad = stats1.agilidad;
        this.defensa = stats1.defensa;
        this.experiencia = stats1.experiencia;
        this.nivel = stats1.nivel;
    }


    atqBasico(): void {
        console.log("ataque basico asesino supremo")
    }

    ataqueFurtivo(): string {
        return "ataque de asesino supremo"
    }
}