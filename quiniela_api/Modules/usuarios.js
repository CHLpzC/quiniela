const { userModel } = require("../models/usuariosModels");
module.exports = class usuariosModule {

    crear_usuario(usuario) {
        return new Promise((resolve, reject) => {
            console.log(usuario); 

            let objUserModel = new userModel(usuario);
            objUserModel.save((error) => {
                if (error) {
                    console.log(error);
                    return reject({ errorMessage: "No se pudo crear el usuario", error });
                }
                
                console.log("Esta qentrando aquí?"); 
                return resolve({ okMessage: "Se ha creado el usuario correctamente" });
            });
        });
    }

    obtener_usuario() {
        return usuariosModel.find({}).then(usuarios => {
            return usuarios;
        }).catch((error) => {
            return Promise.reject({ errorMessage: "No se pudieron obtener los encuentros" });
        });
    }

    editar_usuario(usuario) {
        return usuariosModel.findById(usuario.email).then(objUserModel => {
            
            usuariosModel.save();
        }).then(() => {
            return { okMessage: "Se ha editado el encuentro correctamente" };
        }).catch((error) => {
            return Promise.reject({ errorMessage: "No se pudo editar el encuentro" });
        })
    }

    eliminar_usuarios(usuario) {
        return usuariosModel.deleteOne({ email: usuario.email }).then(() => {
            return { okMessage: "Se ha eliminado el usuario correctamente" }
        }).catch((error) => {
            return Promise.reject({ errorMessage: "No se pudo eliminar el encuentro", error });
        })
    }
}