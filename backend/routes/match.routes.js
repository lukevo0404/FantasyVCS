const express = require('express');
const router= express.Router();
const Match=require('./match.model');

//Get all Players
router.get('/', async (req,res)=>{
    try{
        const matches = await Match.find();
        res.json(matches)
    }catch(e){
        res.json({message: e});
    }
});

//Create new match data
router.post('/',async (req,res)=>{
    const match = new Match(req.body);

    try{
        await match.save();
        res.json(match);
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

//Get player by playerName
router.get('/:matchID', async (req,res)=>{
    try{
        const match = await Match.find({playerName:req.params.playerName});
        res.json(match)
    }catch(e){
        res.json({message: e});
    }
});

//Update player by playerName

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