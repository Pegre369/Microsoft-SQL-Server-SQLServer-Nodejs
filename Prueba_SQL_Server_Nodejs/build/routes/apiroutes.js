"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Prueba2_1 = require("../controllers/Prueba2");
class apiroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/Prueba/SQL', Prueba2_1.prueba2Controller.Select_normal);
        this.router.post('/Prueba/WHERESQL', Prueba2_1.prueba2Controller.Select_parametros);
        this.router.post('/Prueba/InsertadoSQL', Prueba2_1.prueba2Controller.Insertados);
    }
}
const Apiroutes = new apiroutes();
exports.default = Apiroutes.router;
