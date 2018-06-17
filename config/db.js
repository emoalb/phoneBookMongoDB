const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('../models/phoneBookSchema');
const connectionString = 'mongodb://localhost:27017/phoneBook';

module.exports = mongoose.connect(connectionString);
