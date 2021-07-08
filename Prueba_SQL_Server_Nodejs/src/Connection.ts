/*
    In this file we will have the connection to SQL-server, first will need a constant, 
    that constant have a new requirement that will is rest-mssql-nodejs.
    (you will need to install rest-mssql-nodejs with the command "npm install rest-mssql-nodejs")
 */
const rest = new (require('rest-mssql-nodejs'))({
    user: 'Pedro', // Name of administrator user
    password: '1234', // The password of that user
    database: 'Pro1', // The name of database
    server:'DESKTOP-72T5476', //The name of the server
    port: 1433, // this is optional, by default takes the port 1433
    options: { 
        encrypt: true // this is optional, by default is false
    } 
});



module.exports = {
    rest
}