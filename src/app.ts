import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import { router } from './routes';


const app = express();
app.use(cors());



const serverHttp = http.createServer(app);

app.use(express.json())
app.use(express.urlencoded({ extended: false}));
app.use(router);

app.get('/', (request, response) => {
    response.status(200).send('boilerplate nodejs typescript v-1')
})

export {serverHttp}