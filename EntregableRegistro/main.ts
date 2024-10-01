import { Registroautomotor } from "./registroautomotor";
import { Vehiculo } from "./vehiculo";
import { Registro } from "./registro";

let registro: Registroautomotor = new Registroautomotor("Registro-Olavarria", [])
let siena: Vehiculo = new Vehiculo("gxe603", "auto", 2000)

registro.agregarRegistro("Juan Perez", true, true, siena);

registro.modificarRegistro("gxe603", "camion", 2015)
console.log(siena)