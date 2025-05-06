const mongoose=require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DBConnection = async()=>{
    const MONGOURL=process.env.MONGOURL;
    try{
        await mongoose.connect(MONGOURL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }
        );
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error connecting DB");
    }
}           