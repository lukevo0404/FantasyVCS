const mongoose= require('mongoose');

const detailSchema= mongoose.Schema({
    matchID: {
        type: Number,
        require: true
    },
    gameID: {
        type: Number,
        require: true
    },
    player1Name: {
        type: String ,
        require: true
    },
    player1Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player2Name: {
        type: String ,
        require: true
    },
    player2Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player3Name: {
        type: String ,
        require: true
    },
    player3Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player4Name: {
        type: String ,
        require: true
    },
    player4Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player5Name: {
        type: String ,
        require: true
    },
    player5Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player6Name: {
        type: String ,
        require: true
    },
    player6Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player7Name: {
        type: String ,
        require: true
    },
    player7Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player8Name: {
        type: String ,
        require: true
    },
    player8Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player9Name: {
        type: String ,
        require: true
    },
    player9Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
    player10Name: {
        type: String ,
        require: true
    },
    player10Statistics:{
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        KDA: {type: Number, require: true},
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
    },
});

module.exports= mongoose.model('detail', detailSchema);