const mongoose = require('mongoose')

const cakeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    varients: [],
    prices:[],
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true}
);

const cakeModel =mongoose.model('cakeflower',cakeSchema)

module.exports=cakeModel;