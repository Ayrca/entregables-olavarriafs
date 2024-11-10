
export abstract class Personaje {
    nombre: string;
    hp: number;
    mana: number;
    atqFisico: number;
    atqMagico: number;
    agilidad: number;
    defensa: number;
    experiencia: number;
    nivel: number;
    constructor(nombre: string, hp: number, mana: number, atqFisico: number, atqMagico: number, agilidad: number, defensa: number, experiencia: number, nivel: number) {
        this.nombre = nombre;
        this.hp = hp;
        this.mana = mana;
        this.atqFisico = atqFisico;
        this.atqMagico = atqMagico;
        this.agilidad = agilidad;
        this.defensa = defensa;
        this.experiencia = experiencia;
        this.nivel = nivel;
    }
    getNombre(): string {
        return this.nombre;
    }
    getHp(): number {
        return this.hp
    }
    getMana(): number {
        return this.mana
    }
    getAtqFisico(): number {
        return this.atqFisico
    }
    getAtqMagico(): number {
        return this.atqMagico
    }
    getAgilidad(): number {
        return this.agilidad
    }
    getDefensa(): number {
        return this.defensa
    }
    getExperiencia(): number {
        return this.experiencia
    }
    getNivel(): number {
        return this.nivel
    }
    atqBasico(): void {
        return console.log("ataque basico")
    }
    abstract evolucionar(): Personaje;

}