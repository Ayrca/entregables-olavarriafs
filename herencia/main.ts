import { Registroautomotor } from "./registroautomotor";
import { Vehiculo } from "./vehiculo";
import { Registro } from "./registro";
import { Moto } from "./moto";
import { Camion } from "./camion";

let registro: Registroautomotor = new Registroautomotor("Registro-Olavarria", [])

const moto1 = new Moto("1234", "moto", 2015, 150);
const camion1 = new Camion("4321", "camion", 2001, 5);
const camion2 = new Camion("43210", "camion", 2001, 5);


registro.agregarRegistro("Juan Pérez", true, true, moto1);
registro.agregarRegistro("Maria López", true, true, camion1);
registro.agregarRegistro("Carlos López", true, true, camion2);

console.log(registro.getListaregistros());

registro.modificarRegistro("MOTO123", "Juan Pérez", false, true);

registro.eliminarRegistro("4321");

console.log(registro.getListaregistros());

moto1.estado();
