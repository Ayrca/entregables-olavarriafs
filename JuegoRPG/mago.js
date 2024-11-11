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
exports.Mago = void 0;
var magoSupremo_1 = require("./magoSupremo");
var personaje_1 = require("./personaje");
var stats = {
    hp: 10,
    mana: 100,
    atqFisico: 3,
    atqMagico: 50,
    agilidad: 7,
    defensa: 5,
    experiencia: 1,
    nivel: 1
};
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre) {
        return _super.call(this, nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel) || this;
    }
    Mago.prototype.atqBasico = function () {
        console.log("ataque basico mago");
    };
    Mago.prototype.evolucionar = function () {
        var statsMagoSupremo = {
            hp: stats.hp * 5,
            mana: stats.mana * 5,
            atqFisico: stats.atqFisico * 5,
            atqMagico: stats.atqMagico * 5,
            agilidad: stats.agilidad * 5,
            defensa: stats.defensa * 5,
            experiencia: stats.experiencia * 5,
            nivel: stats.nivel,
        };
        return new magoSupremo_1.MagoSupremo(this.nombre, statsMagoSupremo);
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
