"use strict";
exports.__esModule = true;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(cliente, paciente, proveedor, sucursal) {
        this.cliente = cliente;
        this.paciente = paciente;
        this.proveedor = proveedor;
        this.sucursal = sucursal;
    }
    Veterinaria.prototype.getCliente = function () {
        return this.cliente;
    };
    Veterinaria.prototype.getPaciente = function () {
        return this.paciente;
    };
    Veterinaria.prototype.getProveedor = function () {
        return this.proveedor;
    };
    Veterinaria.prototype.getSucursal = function () {
        return this.sucursal;
    };
    Veterinaria.prototype.mostrarCliente = function () {
        console.log(this.cliente);
    };
    Veterinaria.prototype.mostrarPaciente = function () {
        console.log(this.paciente);
    };
    Veterinaria.prototype.mostrarProveedor = function () {
        console.log(this.proveedor);
    };
    Veterinaria.prototype.mostrarSucursal = function () {
        console.log(this.sucursal);
    };
    return Veterinaria;
}());
exports["default"] = Veterinaria;
