"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pruebaController = void 0;
//Conexion a Base de datos
const Conexion = new (require('rest-mssql-nodejs'))({
    user: 'Pedro',
    password: '1234',
    database: 'Pro1',
    server: 'DESKTOP-72T5476',
});
class PruebaController {
    reporte1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield Conexion.executeQuery('SELECT nombre FROM Prueba;');
            console.log(resul.data);
            res.json(resul.data);
        });
    }
}
exports.pruebaController = new PruebaController();
