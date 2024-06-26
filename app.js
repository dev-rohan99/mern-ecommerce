import express from 'express';
import router from './src/routes/api';
const app = new express();
// import packages
import cors from'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import color from 'color';
import dotenv from 'dotenv';
import path from "path";

dotenv.config();

let url = `mongodb+srv://<username>:<password>@cluster0.knhes.mongodb.net/?retryWrites=true&w=majority&dbname=mern-ecommerce`;
let options = {user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, autoIndex: true}

mongoose.connect(url, options).then((res) => {
    console.log("Database Connected".bgWhite.black);
}).catch((err) => {
    console.log(err);
});

// configuration
app.use(cors());
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(helmet());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const limiter = rateLimit({windowMs: 15 * 60 * 1000, max: 3000});
app.use(limiter);

// router
app.use("/api/v1", router);


app.use(express.static("client/dist"));
app.get("*", (res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});


export default app;
