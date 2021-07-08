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
exports.prueba2Controller = void 0;
//Conexion a Base de datos
const { rest } = require('../Keys');
class Prueba2Controller {
    Select_normal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield rest.executeQuery('SELECT * FROM Prueba;');
            console.log(resul.data);
            res.json(resul.data);
        });
    }
    Select_parametros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var obj = req.body;
            console.log(obj);
            const resul = yield rest.executeQuery('SELECT * FROM Prueba WHERE (nombre = @n) ;', [{
                    name: 'n',
                    type: 'Varchar',
                    value: obj.nombre
                }]);
            console.log(resul.data);
            res.json(resul.data);
        });
    }
    Insertados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var obj = req.body;
            console.log(obj);
            const resul = yield rest.executeQuery('INSERT INTO Prueba(nombre) VALUES(@n);', [{
                    name: 'n',
                    type: 'Varchar',
                    value: obj.nombre
                }]);
            console.log(resul.data);
            res.json(resul.data);
        });
    }
}
exports.prueba2Controller = new Prueba2Controller();
