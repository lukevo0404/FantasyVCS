const express = require('express');
const router= express.Router();
const Detail = require('../models/gameDetail.model');

router.get('/', async (req,res)=>{
    try{
        const details = await Detail.find({}, {_id: 0});
        res.json(details)
    }catch(e){
        res.json({message: e});
    }
});

//Create new match data
router.post('/', async (req,res)=>{
    const detail = new Detail(req.body);

    try{
        const saveDetail = await detail.save();
        res.json(saveDetail);
    }catch(e){
        res.json({message: e});
    }
});

//Get 1 specific game detail
router.get('/:gameID', async (req,res)=>{
    const { gameID } = req.params;
    try{
        const detail = await Match.find({gameID: gameID});
        res.json(detail)
    }catch(e){
        res.json({message: e});
    }
});

