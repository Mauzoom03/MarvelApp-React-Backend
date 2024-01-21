const Marvel = require ("../models/marvel.model")

//GET//
const getMarvel = async (req,res) => {
   try {
    const allMarvel = await Marvel.find();
    return res.status(200).json(allMarvel);
   } catch (error) {
    return res.status(500).json(error);
   }
}


const getOneMarvel = async(req, res) => {
    try {
        const {id} = req.params;

        const oneMarvel = await Marvel.findById(id).populate('marvel');
        return res.status(200).json(oneMarvel);
    } catch (error) {
        return res.status(500).json(error) 
    }
}

//POST//
const postMarvel = async (req,res) => {
    try {
     const newMarvel = new Marvel(req.body)
     const createdMarvel = await newMarvel.save();
     return res.status(201).json(createdMarvel);
    } catch (error) {
     return res.status(500).json(error);
    }
 }

 //DELETE//
 const deleteMarvel = async (req,res) => {
    try {
        const {id} = req.params;
        const deletedMarvel = await Marvel.findByIdAndDelete(id);
        if(!deletedMarvel) {
            return res.status(404).json({message:"el id de tu universo Marvel no existe"})
        }
        return res.status(200).json(deletedMarvel);
    } catch (error) {
        return res.status(500).json(error);
    }
 }

 //PUT//
 const putMarvel = async (req, res) => {
    try {
        const {id} = req.params;
        const putMarvel = new Marvel(req.body);
        putMarvel._id = id;
        const updateMarvel = await Marvel.findByIdAndUpdate(id, putMarvel, {new: true});
        if(!updateMarvel){
            return res.status(404).json({message: " marvel movie not found"});
        }
        return res.status(200).json(updateMarvel);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getMarvel,getOneMarvel,postMarvel,deleteMarvel,putMarvel};
