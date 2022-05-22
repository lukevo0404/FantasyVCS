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
        player1: {
        playerID: {
            type: Number,
            require: true
        },
        playerName: {
            type: String,
            require: true
        },
},
        player2: {
        playerID: {
            type: Number,
            require: true
        },
        playerName: {
            type: String,
            require: true
        },
},
        player3: {
        playerID: {
            type: Number,
            require: true
        },
        playerName: {
            type: String,
            require: true
        },
},  
        player4: {
        playerID: {
            type: Number,
            require: true
        },
        playerName: {
            type: String,
            require: true
        },
},
        player5: {
        playerID: {
            type: Number,
            require: true
        },
        playerName: {
            type: String,
            require: true
        },
},
}]
});

module.exports= mongoose.model('userteam', userTeamSchema);
