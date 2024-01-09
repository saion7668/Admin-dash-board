const express = require("express")
const app = express();

const mongoose = require("mongoose")
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello from server..")
})
const Db =  async()=>{
    await mongoose.connect('mongodb+srv://karmakarsaion:Sonusrini*+7668@cluster0.xeqoffs.mongodb.net/?retryWrites=true&w=majority').then(
        ()=>{
            console.log("connected to database..")
        }
    ).catch(
        (er)=>{
            console.log(er);
        }
    )
}
Db();

app.listen(5050,()=>{console.log("Server is running on the port 5050..")})
