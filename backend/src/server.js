import {app} from '../src/index.js'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
dotenv.config()

const port = process.env.PORT
app.listen(port, () => console.log(`Server work on port ${port}!`));

async function start() {

        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server work on port ${port}!`))
    
}

start().catch((error)=>{
    console.log("fail to start server !!!",error)
process.exit(1)
})