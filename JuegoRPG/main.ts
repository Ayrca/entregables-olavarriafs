import { Personaje } from "./personaje";
import { Asesino } from "./asesino";

import { Mago } from "./mago";

import { Guerrero } from "./guerrero";


let mago1 = new Mago("Gandalf")

console.log(mago1.getHp())
mago1.evolucionar()