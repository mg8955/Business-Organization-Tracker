const express = require('express');
const inquirer = require('inquirer');
const api = require('./routes/api');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


