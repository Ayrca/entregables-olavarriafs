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
exports.GuerreroSupremo = void 0;
var guerrero_1 = require("./guerrero");
var stats = {
    hp: 20 * 5,
    mana: 40 * 5,
    atqFisico: 8 * 5,
    atqMagico: 10 * 5,
    agilidad: 8 * 5,
    defensa: 10 * 5,
    experiencia: 1 * 5,
    nivel: 1
};
var GuerreroSupremo = /** @class */ (function (_super) {
    __extends(GuerreroSupremo, _super);
    function GuerreroSupremo(nombre, stats) {
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
    GuerreroSupremo.prototype.atqBasico = function () {
        console.log("ataque basico guerrero supremo");
    };
    GuerreroSupremo.prototype.cargaMortal = function () {
        return "ataque fisico supremo";
    };
    return GuerreroSupremo;
}(guerrero_1.Guerrero));
exports.GuerreroSupremo = GuerreroSupremo;
