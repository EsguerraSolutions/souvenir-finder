//BUILT IN MODULES
const http = require('http');
const fs = require('fs');
const path = require('path');

//CONFIGURE DOTENV
require('dotenv').config();

//INSTALL EXPRESS
const express = require('express');
const app = express();

//THIRD PARTY MODULES
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const morgan = require('morgan');
const countriesRouter = require('./routes/countries/countries.router');

//CONFIGURE PORT & DATABASE
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

//CONFIGURE MIDDLEWARES

app.use(morgan('combined'));

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/countries',countriesRouter);

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
  
// const upload = multer({ storage: storage });

//START SERVER
const server = http.createServer(app);

server.listen(PORT, (err) => {
    mongoose.connect(MONGO_URL);
    if (err) {
        throw err;
    }
    console.log(`Listening on port ${PORT}`);
});