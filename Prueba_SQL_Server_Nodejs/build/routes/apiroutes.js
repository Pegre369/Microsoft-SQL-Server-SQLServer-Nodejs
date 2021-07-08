"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apicontrollers_1 = require("../controllers/apicontrollers");
class apiroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/Prueba/SQL', apicontrollers_1.apiController.Select_normal);
        this.router.post('/Prueba/WHERESQL', apicontrollers_1.apiController.Select_parametros);
        this.router.post('/Prueba/InsertadoSQL', apicontrollers_1.apiController.Insertados);
    }
}
const Apiroutes = new apiroutes();
exports.default = Apiroutes.router;
