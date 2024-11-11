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
exports.Guerrero = void 0;
var personaje_1 = require("./personaje");
var guerreroSupremo_1 = require("./guerreroSupremo");
var stats = {
    hp: 20,
    mana: 40,
    atqFisico: 8,
    atqMagico: 10,
    agilidad: 8,
    defensa: 10,
    experiencia: 1,
    nivel: 1
};
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre, hp, mana, atqFisico, atqMagico, agilidad, defensa, experiencia, nivel) {
        return _super.call(this, nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel) || this;
    }
    Guerrero.prototype.atqBasico = function () {
        console.log("ataque basico guerrero");
    };
    Guerrero.prototype.evolucionar = function () {
        return new guerreroSupremo_1.GuerreroSupremo(stats);
    };
    return Guerrero;
}(personaje_1.Personaje));
exports.Guerrero = Guerrero;
