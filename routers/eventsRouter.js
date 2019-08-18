const router = require("express").Router();
// TODO: import Events model

const protected = require("../middleware/restricted-middleware");

// TODO: make model for querying db
const Events = require("../data/models/eventsModel");

// GET events by user_id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const events = await Events.findEventsByUserId(id);
    res.json(events);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// POST user to event b
router.post("/:event_id", async (req, res) => {
  const { event_id } = req.params;
  const { user_id } = req.body;
  try {
    const post = await Events.addVolunteersToEvent(event_id, user_id);
    res.json(post);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
