require("./shared/config/config");

const express = require("express");

var app = express();
let http = require("http").createServer(app);
const bodyParser = require("body-parser");

let config = require("./routes/config");
let encuentro = require("./routes/encuentro");
let usuario = require("./routes/usuarios");

app.use(bodyParser.json())
app.use("/config", config);
app.use("/encuentro", encuentro);
app.use("/usuarios", usuario);
 

app.use(function (req, res, next) {

    // Website you wish to allow to connect s
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow 
    res.setHeader('Access-Control-Allow-Headers', '*'); 

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*"); 
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth");
//     res.setHeader("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// })

http.listen(process.env.SERVER_PORT, process.env.SERVER_IP, () => {
    console.log(`API STARTED ON PORT: ${process.env.SERVER_PORT}`);
});