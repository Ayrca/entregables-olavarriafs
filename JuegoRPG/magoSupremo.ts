
//genera dependencia circular
// / import { Mago } from "./mago";

// export class MagoSupremo extends Mago {
//     constructor(nombre: string, stats: { hp: number; mana: number; atqFisico: number; atqMagico: number; agilidad: number; defensa: number; experiencia: number; nivel: number }) {
//         super(nombre);
//         this.hp = stats.hp;
//         this.mana = stats.mana;
//         this.atqFisico = stats.atqFisico;
//         this.atqMagico = stats.atqMagico;
//         this.agilidad = stats.agilidad;
//         this.defensa = stats.defensa;
//         this.experiencia = stats.experiencia;
//         this.nivel = stats.nivel;
//     }
//     atqBasico(): void {
//         console.log("ataque basico mago supremo")
//     }
//     lanzaFuego(): string {
//         return "ataque magico de fuego"
//     }
// }