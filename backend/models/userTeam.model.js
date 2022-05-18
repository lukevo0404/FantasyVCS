const mongoose= require('mongoose');

const userTeamSchema= mongoose.Schema({
    teamID: {
        type: Number,
        require: true
    },

    userID: {
        type: Number,
        require: true
    },


    teamName: {
        type: String,
        require: true
    },

    teamPlayer: [{
        playerID: {
            type: Number,
            require: true
        },
        playerName: {
            type: String,
            require: true
        },
    }]
});

module.exports= mongoose.model('userteam', userTeamSchema);
