import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import helmet from "helmet";
import router from "./src/routes/api.js";
import * as path from "node:path";
const {REQUEST_TIME,REQUEST_NUMBER,MAX_JSON_SIZE,URL_ENCODE} = process.env;


export const app = express();
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());
app.use(hpp())
app.use(cookieParser())


const limiter = rateLimit({windowMs: REQUEST_TIME,max:REQUEST_NUMBER});
app.use(limiter)

app.set('etag',false);


app.use('/api',router);

app.use(express.static('client/dist'));

// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})