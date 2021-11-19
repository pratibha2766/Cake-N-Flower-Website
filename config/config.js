const mongoose =require('mongoose')
require('colors')


const connectDb = async()=>{
    try{
        const url =process.env.MONGO_URI
        const conn =await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true
           // useFindAndModify:true
        })
        console.log(`Mongodb Database Connected! ${conn.connection.host} ` .bgCyan.white)
    }catch(error){
        console.log(`error:${error.message}` .bgRed.white)
    }

}

module.exports =connectDb;