const express =require('express')
const dotenv =require('dotenv')
const path =require('path')

const connectDB =require('./config/config')
const morgan =require('morgan')

require('colors');
//config dotenv
dotenv.config()

//connection mongodb
connectDB()


const app=express()

//middleware

app.use(express.json()) 
app.use(morgan('dev'))

//ROute
app.use("/api/cakes",require("./routes/cakeRouter"))
app.use('/api/user',require("./routes/userRoutes"))
if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"/my-app2/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"my-app2","build","index.html"))
    })

}else{
    app.get("/",(req,res)=>{
        res.send("<h1>Hello from nodemon server</h1>")
    })

}


const port =process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server Running on ${process.env.NODE_ENV}mode on port no ${process.env.PORT}`.bgMagenta.white);
})  