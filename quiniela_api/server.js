require("./shared/config/config");

const express = require("express");

var app = express();
let http = require("http").createServer(app);
http.setTimeout(0);

const bodyParser = require("body-parser");

let config = require("./routes/config");
let encuentro = require("./routes/encuentro");
let usuario = require("./routes/usuarios");

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');

    next();
});

app.use("/config", config);
app.use("/encuentro", encuentro);
app.use("/usuarios", usuario);

http.listen(process.env.SERVER_PORT, process.env.SERVER_IP, () => {
    console.log(`API STARTED ON PORT: ${process.env.SERVER_PORT}`);
});