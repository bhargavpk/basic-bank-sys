const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/bank_db';

mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
});