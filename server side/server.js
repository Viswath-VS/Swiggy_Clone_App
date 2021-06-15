import express from 'express';
import cors from 'cors';
import request from './api/request.js';

// intializing variables
const app = express();
app.use(cors());
app.use(express.json());

// handling all api request from front end
app.use('/api', request);

// returning error not found
// app.use('*', (req, res) => res.status(404).json({ error: 'Ivalid Route or not found.' }));

export default app;
