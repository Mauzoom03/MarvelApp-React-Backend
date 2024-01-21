const express = require("express");
const { getMarvel,postMarvel,deleteMarvel,putMarvel, getOneMarvel } = require("../controllers/marvel.controller");
const { isAuth } = require('../../middlewares/auth');
const marvelRouter = express.Router();

marvelRouter.get("/",getMarvel)
marvelRouter.get("/",getOneMarvel)
marvelRouter.post("/",[isAuth],postMarvel)
marvelRouter.delete("/:id",deleteMarvel)
marvelRouter.put("/:id",putMarvel)

module.exports = marvelRouter;