const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/moneyify', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database successfully.');
    }).catch((e) => {
        console.log('Error while attempting to connect to database!');
        console.log(e);
    });

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};