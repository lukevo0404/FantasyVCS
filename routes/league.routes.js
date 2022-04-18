const express = require('express');
const router= express.Router();
const League=require('./models/league.model.js');

//Get all Leagues
router.get('/', async (req,res)=>{
    try{
        const leagues = await League.find();
        res.json(leagues)
    }catch(e){
        res.json({message: e});
    }
});

//Create new league data
router.post('/',async (req,res)=>{
    const League = new League(req.body);

    try{
        await league.save();
        res.json(league);
    }catch(e){
        res.json({message: e});
    }
});

 //Get room by ID
router.get('/:leaugeID', async (req,res)=>{
    try{
        const league = await League.findById(req.params.roomID);
        res.json(league)
    }catch(e){
        res.json({message: e});
    }
});

// Delete room by RoomID
router.delete('/:leagueID', async (req,res) => {
    try{
        const removedLeague = await League.remove({_id:req.params.roomID});
        res.json(removedLeague)
    }catch(e){
        res.json({message: e});
    }
})

// Update league by LeagueID
router.patch('/:leagueID', async (req,res) => {
    try {
        await League.findByIdAndUpdate(req.params.roomID, req.body);
        await League.save();
        res.send(League);
      } catch (error) {
        res.status(500).send(error);
      }
})

//Get league by LeagueID
router.get('/league/:leagueID', async (req,res)=>{
    try{
        const league = await League.find({League:req.params.leagueID});
        res.json(league)
    }catch(e){
        res.json({message: e});
    }
});

//Update league by LeagueID

router.patch('/league/:leagueID', async (req,res) => {
    try{
        await League.findOneAndUpdate(
            {league:req.params.leagueID}, 
            { $set: {"available" :req.body.available}});
        await League.save();
        res.send(League);
    }catch(e){
        res.json({message: e});
    }
})

module.exports = router;