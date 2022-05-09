const express = require('express');
const router= express.Router();
const Player=require('./player.model');
const playerController = require('../controllers/player.controller');

//Get all Players
router.get('/', async (req,res)=>{
    try{
        const players = await Player.find();
        res.json(players)
    }catch(e){
        res.json({message: e});
    }
});

//Create new player data
router.post('/',async (req,res)=>{
    const player = new Player(req.body);

    try{
        await player.save();
        res.json(player);
    }catch(e){
        res.json({message: e});
    }
});

//Delete player data

// router.delete('/:playerName',async (req,res)=>{
//     try{
//         const removedPlayer = await Player.remove({playerName: req.params.playerName});
//         res.json(removedPlayer);
//     }catch(e){
//         res.json({message: e});
//     }
// });

router.delete('/:playerName', playerController.delete);

//Get player by playerName

// router.get('/playerName/:playerName', async (req,res)=>{
//     try{
//         const player = await Player.find({playerName:req.params.playerName});
//         res.json(player)
//     }catch(e){
//         res.json({message: e});
//     }
// });

router.get('/playerName/:playerName', playerController.get);

//Update player by playerName

// router.patch('/playerName/:playerName', async (req,res) => {
//     try{
//         await Player.findOneAndUpdate({playerName:req.params.playerName}, req.body); 
//         await Player.save();
//         res.send(Player);
//     }catch(e){
//         res.json({message: e});
//     }
// })

router.patch('/playerName/:playerName', playerController.update);

module.exports = router;