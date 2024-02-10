

const express=require("express")

const cors =require("cors")
const app=express();
app.use(express.json())
app.use(cors());
app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce backend"})
})
const authRouters=require('./routes/auth.route');
app.use("/auth",authRouters)
module.exports=app;