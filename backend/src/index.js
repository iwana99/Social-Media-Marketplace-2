import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'

dotenv.config()
export const app = express()

app.use(helmet())
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true,
    }
))


app.use(express.json({limit: '1mb'}))



