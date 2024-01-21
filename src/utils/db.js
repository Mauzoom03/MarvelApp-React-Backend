
//ESTE ARCHIVO SIEMPRE ES LO MISMO//

const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const connect = async () => {
    try {
        const db = await mongoose.connect(DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        const {name,host} =db.connection;
        console.log(`conectado a ${name}DB en host ${host}`);
    } catch (error) {
console.log("error conectando en nuestra DB",error);
    }
}
module.exports = { connect }