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
        player1ID: {
            type: Number,
            require: true
        },
        player2ID: {
            type: Number,
            require: true
        },
        player3ID: {
            type: Number,
            require: true
        },
        player4ID: {
            type: Number,
            require: true
        },
        player5ID: {
            type: Number,
            require: true
        }
}]
});

module.exports= mongoose.model('userteam', userTeamSchema);
