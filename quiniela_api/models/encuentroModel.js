const ConexionQuiniela = require("../shared/db/mongoose_quiniela");
const { encuentroSchema } = require("../schemas/encuentroSchema");

let objConexionQuiniela = new ConexionQuiniela();
let db = objConexionQuiniela.connect();

const encuentroModel = db.model("tbl_encuentros", encuentroSchema);

module.exports = { encuentroModel };



