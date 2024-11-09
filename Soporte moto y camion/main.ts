import { Registroautomotor } from "./registroautomotor";
import { Vehiculo } from "./vehiculo";
import { Registro } from "./registro";

let registro: Registroautomotor = new Registroautomotor("Registro-Olavarria", [])

let siena: Vehiculo = new Vehiculo("gxe603", "auto", 2000);
let siena2: Vehiculo = new Vehiculo("hey503", "auto", 2008);
registro.agregarRegistro("Juan Perez", true, true, siena);
registro.agregarRegistro("Juan carlos", true, true, siena2);

console.log(registro)

registro.modificarRegistro("gxe603", "Ayrton Carli", true, false)

console.log(registro)
