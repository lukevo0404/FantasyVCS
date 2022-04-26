const db = require("../models/player.model");
const Player = db.player;

//Get Information
exports.get = (req, res) => {
  const player = req.params.playerName;

  Player.find({playerName:player})
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "No matched player found"});
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving information with name " + player });
    });
};

// Update Information
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const player = req.params.playerName;

  Player.findOneAndUpdate({playerName:player}, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update!`,
        });
      } else res.send({ message: "Updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating!",
      });
    });
};

// Delete Information
exports.delete = (req, res) => {
    const player = req.params.playerName;

  Player.findOneAndRemove({playerName:player})
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete!`,
        });
      } else {
        res.send({
          message: "Deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete!",
      });
    });
};
