import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import DBConnection from "./App/config/DbConnection.js"

const app=express()
dotenv.config()
app.use(express.json())

app.use(cors())

//PORT Number
const PORT =process.env.PORT || 5000

//Connection Databse

await DBConnection()

//Demo Route
app.get("/",(req,res)=>{
    res.json({
        "title":"Hello Coders",
        "topic":"Secure Auth System"
    })
})

//Server Listining

app.listen(PORT,()=>{
    console.log(`Server Running On http://localhost:${PORT}`)
})

 
