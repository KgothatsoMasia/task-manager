import express from "express";

import { URL } from 'url';

import { PORT } from "./config/env.js";

const __dirname = new URL('.', import.meta.url).pathname;

const app = express();

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get ('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html');
});

app.listen(PORT, () => {
    console.log(`server running on PORT: http://localhost:${PORT}`);
});