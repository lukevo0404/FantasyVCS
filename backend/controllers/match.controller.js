const Match = require('../models/match.model');

class matchController {
    index(req, res, next) {
        Match.find({})
        .then(matches => res.json(matches))
        .catch(next);
    }
}

module.exports = new matchController();