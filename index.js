const express = require('express');

const routes = require('./routes');
const { initDataBase } = require('./config/dataBase');
const { setupHandlebars } = require('./config/handlebars');

const PORT = 5000;

const app = express();

setupHandlebars(app);
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(routes);

initDataBase()
    .then(() => {
        app.listen(PORT, () => console.log(`server is listening on port ${PORT}...`));
    })
    .catch((error) => console.log(error));