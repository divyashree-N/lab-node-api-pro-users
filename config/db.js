const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://system:root@cluster0.jmc5v.mongodb.net/program?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(ok => console.log("Connected to mongodb"))
    .catch(err => console.log("Mongodb connection error", err));

module.exports = mongoose
