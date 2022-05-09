const mongoose= require('mongoose');

const playerSchema= mongoose.Schema({
    playerName: {
        type: String ,
        require: true
    },
    playerAge: {
        type: Number,
        require: true
    },
    playerPosition: {
        type: String,
        require: true
    },
    playerStatistics:[{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
        assist: {type: Number, require: true},
        visionScore: {type: Number, require: true},
        soloKill: {type: Number, require: true},
        doubleKill: {type: Number, require: true},
        tripleKill: {type: Number, require: true},
        quadraKill: {type: Number, require: true},
        pentaKill: {type: Number, require: true},
        objectiveStole: {type: Number, require: true},
        win: {type: Number, require: true},
        lose: {type: Number, require: true},
        appearance: {type: Number, require: true},
    }]
});

module.exports= mongoose.model('player', playerSchema);