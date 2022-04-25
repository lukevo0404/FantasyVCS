const express = require('express');
const router= express.Router();
const Match = require('../models/match.model');

const matchController = require('../controllers/match.controller')

//Get all Players
router.get('/', matchController.index);

//Create new match data
router.post('/', async (req,res)=>{
    const match = new Match(req.body);

    try{
        const saveMatch = await match.save();
        res.json(saveMatch);
    }catch(e){
        res.json({message: e});
    }
});

//Delete match 
router.delete('/:matchID',async (req,res)=>{
    try{
        const removedMatch = await Match.remove({playerName: req.params.playerName});
        res.json(removedMatch);
    }catch(e){
        res.json({message: e});
    }
});

//Get match by matchID
router.get('/:matchID', async (req,res)=>{
    try{
        const match = await Match.find({playerName:req.params.playerName});
        res.json(match)
    }catch(e){
        res.json({message: e});
    }
});

//Update match by matchID

router.patch('/:matchID', async (req,res) => {
    try{
        await Match.findOneAndUpdate(req.params.matchID, req.body); 
        await Match.save();
        res.send(Match);
    }catch(e){
        res.json({message: e});
    }
})

module.exports = router;