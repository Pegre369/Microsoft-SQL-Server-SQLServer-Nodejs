"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const apiroutes_1 = __importDefault(require("./routes/apiroutes")); //In this part, import the file that manage the petitions
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 9000); //This is the number of the port, you can change that number 
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        this.app.use(express_1.default.urlencoded({ extended: false }));
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

    REMEMBER
    the structure of the route is this

    LOCALHOST := localhost : 'number port' PATH
    PATH: '/' | '/name of route'
    
    */
    routes() {
        this.app.use('/api', apiroutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('This server listen on port ' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
