
//siempre inciaizamos en index lo q vamos a necesitar .!!Mantenerlo lo mas limpio posible.//
const express = require("express");
const dotenv = require("dotenv");
const marvelRouter = require("./src/api/routes/marvel.routes");
const userRouter = require('./src/api/routes/user.routes');
const cors = require('cors');
dotenv.config()



const { connect } = require("./src/utils/db");
const { isAuth } = require('./src/middlewares/auth');
const PORT = process.env.PORT;


const app = express();
connect();
app.use(cors());
app.use(express.json());

//Siempre poner estas lineas nos evitan futuros errores en consola//
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/marvels",marvelRouter)
app.use('/user', userRouter);


app.listen(PORT,() => console.log(`escuchando en el puerto: http://localhost:${PORT}`))

