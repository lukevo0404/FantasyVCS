const mongoose= require('mongoose');

const leagueSchema= mongoose.Schema({
    leagueID: {
        type: String ,
        require: true
    },
    leagueType: {
        type: String,
        require: true
    },
    leagueCounts: {
        type: Number,
        require: true
    },
    leagueName: {
        type: String,
        require: true
    },

});

module.exports= mongoose.model('league', leagueSchema);