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
exports.AsesinoSupremo = void 0;
var asesino_1 = require("./asesino");
var stats = {
    hp: 15 * 5,
    mana: 60 * 5,
    atqFisico: 10 * 5,
    atqMagico: 8 * 5,
    agilidad: 20 * 5,
    defensa: 6 * 5,
    experiencia: 1 * 5,
    nivel: 1
};
var AsesinoSupremo = /** @class */ (function (_super) {
    __extends(AsesinoSupremo, _super);
    function AsesinoSupremo(nombre, stats) {
        var _this = _super.call(this, nombre, stats.hp, stats.mana, stats.atqFisico, stats.atqMagico, stats.agilidad, stats.defensa, stats.experiencia, stats.nivel) || this;
        _this.hp = stats.hp;
        _this.mana = stats.mana;
        _this.atqFisico = stats.atqFisico;
        _this.atqMagico = stats.atqMagico;
        _this.agilidad = stats.agilidad;
        _this.defensa = stats.defensa;
        _this.experiencia = stats.experiencia;
        _this.nivel = stats.nivel;
        return _this;
    }
    AsesinoSupremo.prototype.atqBasico = function () {
        console.log("ataque basico asesino supremo");
    };
    AsesinoSupremo.prototype.ataqueFurtivo = function () {
        return "ataque de asesino supremo";
    };
    return AsesinoSupremo;
}(asesino_1.Asesino));
exports.AsesinoSupremo = AsesinoSupremo;
