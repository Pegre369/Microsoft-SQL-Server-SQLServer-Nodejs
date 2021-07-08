import { Router } from 'express';
import { apiController } from '../controllers/apicontrollers';

class apiroutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
      this.router.get('/Prueba/SQL', apiController.Select_normal);
      this.router.post('/Prueba/WHERESQL', apiController.Select_parametros);
      this.router.post('/Prueba/InsertadoSQL', apiController.Insertados);
    }
}

const Apiroutes = new apiroutes();

export default Apiroutes.router;