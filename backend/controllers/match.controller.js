const db = require ("../models/match.model");
const Match = db.match;

//Get Match by id
exports.get = (req, res) => {
    const id = req.params.id;
  
  Match.findbyId(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found information with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving match information with id=" + id });
    });
};

// Update Match
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Match.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

// Delete Match
exports.delete = (req, res) => {
  const id = req.params.id;

  Match.findByIdAndRemove(id)
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
