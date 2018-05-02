const mongoose = require("mongoose");

const encuentroSchema = new mongoose.Schema({
    equipo1: {
        type: String,
        trim: true,
        required: true
    }, equipo2: {
        type: String,
        trim: true,
        required: true
    }, marcador1: {
        type: Number
    }, marcador2: {
        type: Number
    }, informacion: {
        type: String, 
        trim: true
    }, imgEquipo1: {
        type: String,
        trim: true
    }, imgEquipo2: {
        type: String,
        trim: true
    }
});

module.exports = { encuentroSchema };