import app from './server.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// variable configurations
dotenv.config();
const port = process.env.PORT || 5000;
const url = process.env.DATABASE_LINK;

// connecting to database .
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(app.listen(port, () => console.log(`database connected server is running at port ${port}`)))
    .catch((err) => {
        console.log(err);
    });
