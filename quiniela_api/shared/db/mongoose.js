var mongoose = require("mongoose");

module.exports = class Conexion {
    /**
     * Procedimiento para abrir conexión con mongo
     * @param {*} conn 
     */
    connect(conn) {
        let connectionURI = `mongodb://${conn.user}:${conn.pass}@${conn.server}:${conn.port}/${conn.db}`;
        return mongoose.createConnection(connectionURI);
    }
}