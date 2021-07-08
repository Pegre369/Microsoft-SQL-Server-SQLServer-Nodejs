  

import { Router } from 'express';
import { pruebaController } from '../controllers/Prueba';
import { prueba2Controller } from '../controllers/Prueba2';



class apiroutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
      this.router.get('/Prueba/SQL', prueba2Controller.Select_normal);
      this.router.post('/Prueba/WHERESQL', prueba2Controller.Select_parametros);
      this.router.post('/Prueba/InsertadoSQL', prueba2Controller.Insertados);
    }
}

const Apiroutes = new apiroutes();

export default Apiroutes.router;