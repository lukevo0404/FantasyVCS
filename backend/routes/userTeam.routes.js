const express = require("express");
const router = express.Router();
const UserTeam = require("../models/userTeam.model");

//Get User's Team Information
router.get('/', async (req, res) => {
    try{
        const userTeams = await UserTeam.find();
        res.json(userTeams)
    }catch(e){
        res.json({message: e});
}
});

//Create New User's Team 
router.post('/', async (req, res) => {
    const userTeam = new UserTeam(req.body);
    try{
        await userTeam.save();
        res.send(userTeam);
    }catch(e){
        res.status(500).send({message: e});
    }
}
);

//Get User's Team by ID
router.get('/:userTeamID', async (req, res) => {
    try{
        const userTeam = await UserTeam.findById(req.params.userTeamID);
        res.json(userTeam)
    } catch(e){
        res.json({message: e});
    }
}
);

//Update User's Team by ID
router.patch('/:userTeamID', async (req, res) => {
    try{
        await UserTeam.findByIdAndUpdate(req.params.userTeamID, req.body);
            await UserTeam.save();
            res.send(UserTeam);
    }catch(e){
        res.json({message: e});
    }
})

//Delete User's Team by ID
router.delete('/:userTeamID', async (req, res) => {
    try{
        const removedUserTeam = await UserTeam.remove({_id: req.params.userTeamID});
        res.json(removedUserTeam)
    }catch(e){
        res.json({message: e});
    }
})

//Update User's Team Line Up
router.patch('/:userID/:userTeamID', async (req, res) => {
    try{
        await UserTeam.findOneAndUpdate(
            {"_id": req.params.userID, "userTeam._id": req.params.userTeamID},
            {$set: {"userTeam.$.teamPlayer": req.body}});
            await UserTeam.save();
            res.send(UserTeam);
    }catch(e){
        res.json({message: e});
    }
})

//Delete User's Team Line Up

router.delete('/:userID/:userTeamID', async (req, res) => {
    try{
        await UserTeam.findOneAndUpdate(
            {"userTeam._id": req.params.userTeamID},
            {$pull: {"userTeam.$.teamPlayer": {"playerID": req.params.userTeamID}}});
            await UserTeam.save();
    }catch(e){
        res.json({message: e});
    }
})

module.exports = router;

