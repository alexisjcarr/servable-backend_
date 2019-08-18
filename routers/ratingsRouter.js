const router = require("express").Router();
const Ratings = require("../data/models/ratingsModel");

// TODO: make model for querying ratings db

router.get("/all", async (req, res) => {
  // TODO: make a model for ratings
  try {
    const ratings = await Ratings.findAllRatings();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({
      message: "Couldn't get ratings"
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ratings = await Ratings.findRatingsByUser(id);
    res.json(ratings);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
