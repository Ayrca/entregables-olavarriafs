"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asesino = void 0;
var personaje_1 = require("./personaje");
var asesinoSupremo_1 = require("./asesinoSupremo");
var stats = {
    hp: 15,
    mana: 60,
    atqFisico: 10,
    atqMagico: 8,
    agilidad: 20,
    defensa: 6,
    experiencia: 1,
    nivel: 1,
};
var Asesino = /** @class */ (function (_super) {
    __extends(Asesino, _super);
    function Asesino(nombre, hp, mana, atqFisico, atqMagico, agilidad, defensa, experiencia, nivel) {
        return _super.call(this, nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel) || this;
    }
    Asesino.prototype.atqBasico = function () {
        console.log("ataque basico asesino");
    };
    Asesino.prototype.evolucionar = function () {
        return new asesinoSupremo_1.AsesinoSupremo(stats);
    };
    return Asesino;
}(personaje_1.Personaje));
exports.Asesino = Asesino;
