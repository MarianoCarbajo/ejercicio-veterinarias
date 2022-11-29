"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(id, nombre, telefono, esVip) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = esVip;
    }
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.imprimirCliente = function () {
        console.log(this);
    };
    Cliente.prototype.getEsVip = function () {
        return this.esVip;
    };
    return Cliente;
}());
exports["default"] = Cliente;
