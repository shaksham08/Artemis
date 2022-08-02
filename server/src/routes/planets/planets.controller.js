const planets = require("../../models/planets.model");

function getPlanets(req, res) {
  res.status(200).json(planets);
}

module.exports = {
  getPlanets,
};
