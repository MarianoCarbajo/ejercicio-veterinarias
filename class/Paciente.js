"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(id, nombre, especie) {
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
    }
    Paciente.prototype.getId = function () {
        return this.id;
    };
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.imprimirPaciente = function () {
        console.log(this);
    };
    return Paciente;
}());
exports["default"] = Paciente;
