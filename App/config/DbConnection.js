import mongoose from "mongoose";

const DBConnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGOURI,{
            dbName:"Rashmis_Bakery"
        })
        console.log("Database Connect Successfully.....")
    } catch (error) {
        console.log(error)
    }
}

export default DBConnection