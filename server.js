import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import {connectDb} from "./DB/db.js";
// import {router} from './MVC/Routes/route.js';

// config env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//connect DB
connectDb();

// router
app.get('/',(req,res)=>{
    res.send({
        message:'hello DcodeTech'
    })
})

// app.use('/api/v1/',router);
app.listen(PORT,()=>{
    console.log(`Listening to port number ${PORT}`.bgGreen.white);
} )
