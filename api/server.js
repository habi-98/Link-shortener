const express = require('express');
const mongoose = require('mongoose');
const links = require('./app/links');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;

mongoose.connect('mongodb://localhost/links', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(() => {
    app.use('/links', links);
    app.listen(port, () => {
        console.log(`Server started on ${port} port`)
    })
});
