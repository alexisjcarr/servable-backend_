const db = require("../dbConfig");

module.exports = {
  findEventsByUserId,
  addVolunteersToEvent
};

async function findEventsByUserId(id) {
  return await db("events").where({ id });
}

async function addVolunteersToEvent(event_id, user_id) {
  const volunteer = { event_id, user_id };
  return await db("volunteers").insert(volunteer);
}
