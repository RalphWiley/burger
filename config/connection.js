var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 's554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'u9oeogrrczye4lf9',
        password: 'o7wvzj65tuifeojd',
        database: 'qmim82wg7pf8mi6u'
    });
    // connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'burgers_db'
    // });
}

 connection.connect(function(err) {
     if(err) {
         console.error('Error connecting: ' + err.stack);
         return;
     }

    console.log('Connected as id ' + connection.threadId);
 })

module.exports = connection;