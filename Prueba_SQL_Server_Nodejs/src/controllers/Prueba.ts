import { Request, Response} from 'express';
//Conexion a Base de datos

const Conexion = new(require('rest-mssql-nodejs'))({
    user: 'Pedro', 
    password: '1234',
    database: 'Pro1',
    server:'DESKTOP-72T5476',
});

class PruebaController {
    public async reporte1(req: Request, res:Response){
        
            const resul = await Conexion.executeQuery('SELECT nombre FROM Prueba;');
            console.log(resul.data);
            res.json(resul.data);    
      
        
    }
}

export const pruebaController = new PruebaController();