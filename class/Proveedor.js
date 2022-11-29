"use strict";
exports.__esModule = true;
var Proveedor = /** @class */ (function () {
    function Proveedor(id, nombre, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Proveedor.prototype.getId = function () {
        return this.id;
    };
    Proveedor.prototype.getNombre = function () {
        return this.nombre;
    };
    Proveedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    return Proveedor;
}());
exports["default"] = Proveedor;
