const ConexionQuiniela = require("../shared/db/mongoose_quiniela");
const { userSchema } = require("../schemas/userSchema");

let objConexionQuiniela = new ConexionQuiniela();
let db = objConexionQuiniela.connect();

const userModel = db.model("tbl_users", userSchema);

module.exports = { userModel };