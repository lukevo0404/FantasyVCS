const mongoose= require('mongoose');

const playerSchema= mongoose.Schema({
    playerID: {
        type: String ,
        require: true
    },

    playerName: {
        type: String,
        require: true
    },

    playerPosition: {
        type: String,
        require: true
    },
    playerAge: {
        type: Number,
        require: true
    },
    

});

module.exports= mongoose.model('player', playerSchema);