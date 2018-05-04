const express = require("express");
const router = express.Router();

const UsuariosModule = require("../modules/usuarios");

router.get("/", (req, res) => {
    this.objUsuariosModule = new UsuariosModule();

    this.objUsuariosModule.obtener_encuentros().then(usuario => {
        return res.status(200).send(usuario);
    }).catch((error) => {
        return res.status(400).send(error);
    }); 
});

router.post("/crear", (req, res) => {
    console.log("esta entrando? calalo we");
    this.objUsuariosModule = new UsuariosModule();

    this.objUsuariosModule.crear_usuario(req.body).then(resultado => {
        return res.status(200).send({ okMessage: "Se ha guardado el usuario correctamente" });
    }).catch((error) => {
        return res.status(400).send(error);
    });

});

//donde esta donde lo estas consumiendo?

router.put("/editar", (req, res) => {
    this.objUsuariosModule = new UsuariosModule();

    this.objUsuariosModule.editar_usuario(req.body).then(resultado => {
        return res.status(200).send({ okMessage: "Se ha editado el usuario correctamente" });
    }).catch((error) => {
        return res.status(400).send(error);
    });

});

router.delete("/eliminar", (req, res) => {
    this.objUsuariosModule = new UsuariosModule();

    this.objUsuariosModule.eliminar_usuarios(req.body).then(resultado => {
        return res.status(200).send({ okMessage: "Se ha eliminado el usuario correctamente" });
    }).catch((error) => {
        return res.status(400).send(error);
    });

});


module.exports = router;