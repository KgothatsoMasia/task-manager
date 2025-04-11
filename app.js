import express from "express";

import { URL } from 'url';

import { PORT } from "./config/env.js";
import taskRouter from "./routes/task.router.js";
import connectToDatabase from "./database/mangodb.js";

const __dirname = new URL('.', import.meta.url).pathname;

const app = express();

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get ('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html');
});

app.use('api/v1/tasks', taskRouter)



app.listen(PORT, async () => {

    await connectToDatabase();

    console.log(`server running on PORT: http://localhost:${PORT}`);
});