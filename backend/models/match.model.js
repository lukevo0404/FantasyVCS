const mongoose= require('mongoose');

const matchSchema= mongoose.Schema({
    matchID: {
        type: Number,
        require: true
    },
    teamA: {
        type: String,
        require: true
    },
    teamB: {
        type: String,
        require: true
    },
    teamAscore: {
        type: Number,
        require: true
    },
    teamBscore: {
        type: Number,
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