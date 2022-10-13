const mongoose = require('mongoose');
const CONNECTION_STRING = 'mongodb://localhost:27017/porfolio';

exports.initDataBase = () => mongoose.connect(CONNECTION_STRING);