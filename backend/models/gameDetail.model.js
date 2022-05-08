const mongoose = require('mongoose');

const detailSchema = mongoose.Schema({
    matchID: {
        type: Number,
        require: true
    },
    gameID: {
        type: Number,
        require: true
    },
    player1Name: {
        type: String,
        require: true
    },
    player1Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player2Name: {
        type: String,
        require: true
    },
    player2Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player3Name: {
        type: String,
        require: true
    },
    player3Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player4Name: {
        type: String,
        require: true
    },
    player4Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player5Name: {
        type: String,
        require: true
    },
    player5Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player6Name: {
        type: String,
        require: true
    },
    player6Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player7Name: {
        type: String,
        require: true
    },
    player7Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player8Name: {
        type: String,
        require: true
    },
    player8Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player9Name: {
        type: String,
        require: true
    },
    player9Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
    player10Name: {
        type: String,
        require: true
    },
    player10Statistics: {
        role: { type: String, require: true },
        kill: { type: Number, require: true },
        death: { type: Number, require: true },
        KDA: { type: Number, require: true },
        visionScore: { type: Number, require: true },
        soloKill: { type: Number, require: true },
        doubleKill: { type: Number, require: true },
        tripleKill: { type: Number, require: true },
        quadraKill: { type: Number, require: true },
        pentaKill: { type: Number, require: true },
        objectiveStole: { type: Boolean, require: true },
        win: { type: Boolean, require: true },
        lose: { type: Boolean, require: true },
    },
});

module.exports = mongoose.model('detail', detailSchema);