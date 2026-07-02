
import mongoose from 'mongoose'
export const connectDB =async(url)=>{
    if(!url){
        console.log("Url from DB is missing")
    }
    mongoose.set("strictQuery",true)

    await mongoose.connect(url,
        {
            maxPoolSize:20,
            serverSelectionTimeoutMS:5000
        }
    )
    console.log("Connection is success ❤❤❤")
   
        

    
}