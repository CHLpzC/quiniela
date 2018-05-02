const { encuentroModel } = require("../models/encuentroModel");
module.exports = class EncuentroModule {
    crear_encuentro(encuentro) {
        return new Promise((resolve, reject) => {
            console.log(encuentro);
            let objEncuentroModel = new encuentroModel(encuentro);
            objEncuentroModel.save((error) => {
                if (error) {
                    return reject({ errorMessage: "No se pudo crear el encuentro", error });
                }
                return resolve({ okMessage: "Se ha creado el encuentro correctamente" });
            });
        });
    }

    obtener_encuentros() {
        return encuentroModel.find({}).then(encuentros => {
            return encuentros;
        }).catch((error) => {
            return Promise.reject({ errorMessage: "No se pudieron obtener los encuentros" });
        });
    }

    editar_encuentro(encuentro) {
        return encuentroModel.findById(encuentro._id).then(objEncuentroModel => {
            objEncuentroModel.equipo1 = encuentro.equipo1;
            objEncuentroModel.equipo2 = encuentro.equipo2;
            objEncuentroModel.marcador1 = encuentro.marcador1;
            objEncuentroModel.marcador2 = encuentro.marcador2;
            objEncuentroModel.informacion = encuentro.informacion;
            objEncuentroModel.imgEquipo1 = encuentro.imgEquipo1;
            objEncuentroModel.imgEquipo2 = encuentro.imgEquipo2;

            objEncuentroModel.save();
        }).then(() => {
            return { okMessage: "Se ha editado el encuentro correctamente" };
        }).catch((error) => {
            return Promise.reject({ errorMessage: "No se pudo editar el encuentro" });
        })
    }

    eliminar_encuentro(encuentro) {
        return encuentroModel.deleteOne({ _id: encuentro._id }).then(() => {
            return { okMessage: "Se ha eliminado el encuentro correctamente" }
        }).catch((error) => {
            return Promise.reject({ errorMessage: "No se pudo eliminar el encuentro", error });
        })
    }
}