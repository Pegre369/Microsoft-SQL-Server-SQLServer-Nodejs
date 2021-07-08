import express,{Application} from "express";
import morgan from "morgan";
import cors from "cors";
import apirouts from './routes/apiroutes'; //In this part, import the file that manage the petitions

class Server{
    public app:Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT || 9000); //This is the number of the port, you can change that number 
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: false }));
    }

    /*In this method, we will write the different routs that your server will use. 
    If you will use a rout that don't have a specific name, you can put only this symbol '/' in the rout name.
    But if you will  manage a different routs or controllers, I recomend that your rout begins with something 
    that give an idea that what will you need or how will you divices your petitions.

    For Example:

    if you will have a route, where that rout only return a specific information, something like a user nickname and your password, 
    you can use '/api' that rout will have all peticion that only give specific information. 
    
    It is just a recommendation, you can use the path of the same name for everyone, 
    but in the next part you should put something that differentiates your petitions.
    */
    routes():void{

        this.app.use('/api', apirouts);
    }

    
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('This server listen on port '+ this.app.get('port'));
        });
    }

}
const server = new Server();
server.start();