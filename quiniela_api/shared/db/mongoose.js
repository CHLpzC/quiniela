var mongoose = require("mongoose");

module.exports = class Conexion {
    connect(conn){
        let connectionURI = `mongodb://${conn.user}:${conn.pass}@${conn.server}:${conn.port}/${conn.db}`;
        return mongoose.createConnection(connectionURI);
    }
}