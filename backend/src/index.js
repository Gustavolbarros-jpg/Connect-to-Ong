import express from 'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js'
import {config} from 'dotenv'

import userRouter from './routes/users.js'
import authRouter from './auth/auth.js'; 
import projectRouter from './routes/projectRoutes.js';
import ongRouter from './routes/ngoRoutes.js';
config()


async function main() {
    const hostname = 'localhost'
const port = process.env.PORT || 3333

    const app = express()

    const MongoConecction = await Mongo.connect({MongoConectionString: process.env.MONGO_CS, MongoDbName : process.env.MONGO_DB_NAME})
    console.log(MongoConecction)

    app.use(express.json())
    app.use(cors()); // libera todas as origens



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
    app.use('/api/ongs', ongRouter);

    app.get('/teste-cors', (req, res) => {
    res.json({ message: 'CORS funcionando!' });
    });

    
    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()
