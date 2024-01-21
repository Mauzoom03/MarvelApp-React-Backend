const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marvelSchema = new Schema(
    {
    titulo:{type:String,require:true},
    personajes:{type:Array,require:true},
    año:{type:"number",require:true},
    sinopsis:{type:String,require:true},
    facturacion:{type:"number",require:true},
    genero:{type:Array,default:"Ciencia Ficcion",},
    foto: {type: String, required: false},
    },
    {
        timestamps:true
    }
)

const Marvel = mongoose.model("marvel",marvelSchema);

module.exports = Marvel;