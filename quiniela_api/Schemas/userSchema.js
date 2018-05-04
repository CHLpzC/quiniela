const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    apellido: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    admin: {
        type: Boolean
    },
    token: {
        type: String,
        trim: true,
        required: true
    },
    fechaAlta: {
        type: Date
    },
    fechaModificacion: {
        type: Date
    }
});

module.exports = { userSchema };

