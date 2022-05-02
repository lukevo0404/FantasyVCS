const express = require('express');
const router= express.Router();
const Match = require('../models/match.model');

const matchController = require('../controllers/match.controller');

//Get all Players
router.get('/', async (req,res)=>{
    try{
        const matches = await Match.find({}, {_id: 0});
        res.json(matches)
    }catch(e){
        res.json({message: e});
    }
});

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
    console.log(req.body);
    try{
        const removedMatch = await Match.remove({playerName: req.params.playerName});
        res.json(removedMatch);
    }catch(e){
        res.json({message: e});
    }
});

// router.get('/:id', async (req,res)=>{
//     const { id } = req.params;
//     res.send(id)
// });
//Get match by matchID
router.get('/:id', async (req,res)=>{
    const { id } = req.params;
    try{
        const match = await Match.find({id: id});
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