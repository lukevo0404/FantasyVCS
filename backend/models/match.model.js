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
    numberofGame: {         //BO3 or BO5
        type: String,
        min: 3,
        max: 5,
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
    },
    teamAName: {
        type: String,
        require: true
    },
    teamBName: {
        type: String,
        require: true
    },
    result: {
        type: String,
        require: true
    }
});

module.exports= mongoose.model('match', matchSchema);