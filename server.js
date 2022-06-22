import express from "express";
import dotenv from "dotenv";
import dbConect from "./config/dbConect.js";
import userRouter from "./routes/userRoutes/user.route.js";



const app = express();

app.use(express.json());

dotenv.config();
dbConect();

app.use('/user', userRouter)


const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server runnung on port: ${PORT}!`));