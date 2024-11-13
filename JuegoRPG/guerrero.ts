import { Personaje } from "./personaje";

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


const stats1 = {
    hp: 20 * 5,
    mana: 40 * 5,
    atqFisico: 8 * 5,
    atqMagico: 10 * 5,
    agilidad: 8 * 5,
    defensa: 10 * 5,
    experiencia: 1 * 5,
    nivel: 1
}
export class GuerreroSupremo extends Guerrero {
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
        console.log("ataque basico guerrero supremo")
    }
    cargaMortal(): string {
        return "ataque fisico supremo"
    }
}

