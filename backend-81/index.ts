import express from 'express';
import mongoDb from "./mongoDb";
import cors from 'cors';
import linksRouter from "./routers/links";
import mongoose from 'mongoose';

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json());
app.use('/links', linksRouter);

const run = async () => {

    await mongoose.connect('mongodb://localhost/shortenLink');

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    process.on('exit', () => {
        mongoDb.disconnect()
    })
};

run().catch(console.error);