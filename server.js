import express from "express";
import dotenv from "dotenv";
import dbConect from "./config/dbConect.js";


const app = express();

dbConect();
dotenv.config();

const PORT = process.env.PORT;


app.listen(PORT, () => console.log(`Server runnung on port: ${PORT}!`));