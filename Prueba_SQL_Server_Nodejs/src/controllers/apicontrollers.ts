import { Request, Response} from 'express';
//Conexion a Base de datos
const { rest } = require('../Keys');

class ApiController {

    public async Select_normal(req: Request, res:Response){
             
            const resul = await rest.executeQuery('SELECT * FROM Prueba;');
            console.log(resul.data);
            res.json(resul.data);    

    }

    public async Select_parametros(req: Request, res:Response){
    
        var obj = req.body;
        console.log(obj);
        const resul = await rest.executeQuery('SELECT * FROM Prueba WHERE (nombre = @n) ;',[{
            name: 'n',
            type: 'Varchar',
            value: obj.nombre
        }]);
        console.log(resul.data);
        res.json(resul.data);
    
    }

    public async Insertados(req: Request, res:Response){
    
        var obj = req.body;
        console.log(obj);
        const resul = await rest.executeQuery('INSERT INTO Prueba(nombre) VALUES(@n);',[{
            name: 'n',
            type: 'Varchar',
            value: obj.nombre
        }]);
        console.log(resul.data);
        res.json(resul.data);
    
    }

}

export const apiController = new ApiController();