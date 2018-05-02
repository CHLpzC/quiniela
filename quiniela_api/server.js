require("./shared/config/config");

const express = require("express");

var app = express();
let http = require("http").createServer(app);
const bodyParser = require("body-parser");

let config = require("./routes/config");
let encuentro = require("./routes/encuentro");

app.use(bodyParser.json())
app.use("/config", config);
app.use("/encuentro", encuentro);

http.listen(process.env.SERVER_PORT, process.env.SERVER_IP, () => {
    console.log(`API STARTED ON PORT: ${process.env.SERVER_PORT}`);
});