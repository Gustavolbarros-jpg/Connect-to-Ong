import express from 'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js'
import {config} from 'dotenv'

import userRouter from './routes/users.js'
import authRouter from './auth/auth.js'; 
import projectRouter from './routes/projectRoutes.js';
config()


async function main() {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    const MongoConecction = await Mongo.connect({MongoConectionString: process.env.MONGO_CS, MongoDbName : process.env.MONGO_DB_NAME})
    console.log(MongoConecction)

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: 'Welcome to Connect To Ong'
        })
    })
    //routers
    app.use('/users',userRouter)
    app.use('/auth', authRouter);
    app.use('/projects', projectRouter); 
    
    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()
