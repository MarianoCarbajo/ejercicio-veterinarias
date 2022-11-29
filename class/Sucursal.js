"use strict";
exports.__esModule = true;
var Sucursal = /** @class */ (function () {
    function Sucursal(id, nombre, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
    }
    Sucursal.prototype.getId = function () {
        return this.id;
    };
    Sucursal.prototype.getNombre = function () {
        return this.nombre;
    };
    Sucursal.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Sucursal;
}());
exports["default"] = Sucursal;
