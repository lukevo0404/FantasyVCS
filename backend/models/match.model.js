const mongoose= require('mongoose');

const matchSchema= mongoose.Schema({
    date: {
        type: String ,
        require: true
    },
    patch: {
        type: Number,
        require: true
    },
    numberofGame: {
        type: Number,
        min: 1,
        max: 7,
        require: true
    },
    length: {
        type: String,
         require: true
    },
    status: {
        type: String,
        enum: ['ongoing', 'finished', 'canceled', 'postponed'],
        require: true
    }
});

module.exports= mongoose.model('match', matchSchema);