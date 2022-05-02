const mongoose= require('mongoose');

const matchSchema= mongoose.Schema({
    matchID: {
        type: Number,
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
    },
    
    patch: {
        type: Number,
        require: true
    },
    date: {
        type: String ,
        require: true
    }
});

module.exports= mongoose.model('match', matchSchema);