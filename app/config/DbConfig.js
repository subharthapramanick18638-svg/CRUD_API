require('dotenv').config()

const mongoose=require('mongoose');


const DBcon=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected')
    }catch(error){
        console.log(error)
    }
}

module.exports=DBcon