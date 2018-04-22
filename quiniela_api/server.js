require("./shared/config/config");

const express = require("express");

var app = express();
let http = require("http").createServer(app);
let config = require("./routes/config");

app.use("/config", config);

http.listen(process.env.SERVER_PORT, process.env.SERVER_IP, () => {
    console.log(`API STARTED ON PORT: ${process.env.SERVER_PORT}`);
});