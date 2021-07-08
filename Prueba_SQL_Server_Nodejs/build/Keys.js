"use strict";
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
module.exports = {
    rest
};
