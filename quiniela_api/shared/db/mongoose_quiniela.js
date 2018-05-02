const Conexion = require("./mongoose");

module.exports = class ConexionQuiniela {
    constructor() {
        this.objConexion = new Conexion(); 
        this.connection;
    }

    connect() {
        this.connection = this.objConexion.connect({
            server: process.env.MONGO_SERVER,
            db: process.env.MONGO_DB,
            port: process.env.MONGO_PORT,
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASS
        });

        return this.connection;
    }

    close() {
        this.connection.close();
    }
    
}


