const express =require('express')
const router = express.Router()

const cakeModel=require('../models/cakeModel');

//GET ALL CAKES 
router.get('/getAllCakes',async(req,res)=>{
    try {
            const cakes = await cakeModel.find({})
            res.send(cakes)
        
    } catch (error) {
        res.json({messgae:error})
    }

})

module.exports=router;