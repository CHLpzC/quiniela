const express = require("express");
const router = express.Router();

const EncuentroModule = require("../modules/encuentro");

router.get("/", (req, res) => {
    this.objEncuentroModule = new EncuentroModule();

    this.objEncuentroModule.obtener_encuentros().then(encuentros => {
        return res.status(200).send(encuentros);
    }).catch((error) => {
        return res.status(400).send(error);
    });
});

router.post("/crear", (req, res) => {
    this.objEncuentroModule = new EncuentroModule();

    this.objEncuentroModule.crear_encuentro(req.body).then(resultado => {
        return res.status(200).send({ okMessage: "Se ha guardado el encuentro correctamente" });
    }).catch((error) => {
        return res.status(400).send(error);
    });

});

router.put("/editar", (req, res) => {
    this.objEncuentroModule = new EncuentroModule();

    this.objEncuentroModule.editar_encuentro(req.body).then(resultado => {
        return res.status(200).send({ okMessage: "Se ha editado el encuentro correctamente" });
    }).catch((error) => {
        return res.status(400).send(error);
    });

});

router.delete("/eliminar", (req, res) => {
    this.objEncuentroModule = new EncuentroModule();

    this.objEncuentroModule.eliminar_encuentro(req.body).then(resultado => {
        return res.status(200).send({ okMessage: "Se ha eliminado el encuentro correctamente" });
    }).catch((error) => {
        return res.status(400).send(error);
    });

});


module.exports = router;