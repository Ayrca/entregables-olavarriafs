"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, hp, mana, atqFisico, atqMagico, agilidad, defensa, experiencia, nivel) {
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
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getHp = function () {
        return this.hp;
    };
    Personaje.prototype.getMana = function () {
        return this.mana;
    };
    Personaje.prototype.getAtqFisico = function () {
        return this.atqFisico;
    };
    Personaje.prototype.getAtqMagico = function () {
        return this.atqMagico;
    };
    Personaje.prototype.getAgilidad = function () {
        return this.agilidad;
    };
    Personaje.prototype.getDefensa = function () {
        return this.defensa;
    };
    Personaje.prototype.getExperiencia = function () {
        return this.experiencia;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.atqBasico = function () {
        return console.log("ataque basico");
    };
    return Personaje;
}());
exports.Personaje = Personaje;
