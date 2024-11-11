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
exports.MagoSupremo = void 0;
var mago_1 = require("./mago");
var MagoSupremo = /** @class */ (function (_super) {
    __extends(MagoSupremo, _super);
    function MagoSupremo(nombre, stats) {
        var _this = _super.call(this, nombre) || this;
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
    MagoSupremo.prototype.atqBasico = function () {
        console.log("ataque basico mago supremo");
    };
    MagoSupremo.prototype.lanzaFuego = function () {
        return "ataque magico de fuego";
    };
    return MagoSupremo;
}(mago_1.Mago));
exports.MagoSupremo = MagoSupremo;
