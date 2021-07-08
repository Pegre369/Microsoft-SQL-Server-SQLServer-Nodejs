"use strict";
/*
    In this file we will have the connection to SQL-server, first will need a constant,
    that constant have a new requirement that will is rest-mssql-nodejs.
    (you will need to install rest-mssql-nodejs with the command "npm install rest-mssql-nodejs")
 */
const rest = new (require('rest-mssql-nodejs'))({
    user: 'Pedro',
    password: '1234',
    database: 'Pro1',
    server: 'DESKTOP-72T5476',
    port: 1433,
    options: {
        encrypt: true // this is optional, by default is false
    }
});
/*
    After that, we will export the constant as a module.
    This allows that can import the connection to other files.
*/
module.exports = {
    rest
};
