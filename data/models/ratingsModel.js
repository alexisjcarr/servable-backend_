const db = require("../dbConfig");

module.exports = {
  findRatingsByUser,
  findAllRatings
};

async function findAllRatings() {
  // SELECT r.user_id, r.rating, u.username
  // FROM ratings as r INNER JOIN users as u ON r.user_id = u.id
  return await db("ratings")
    .join("users", "users.id", "ratings.user_id")
    .select("users.username", "ratings.rating");
}

async function findRatingsByUser(id) {
  return await db("ratings")
    .join("users", "users.id", "ratings.user_id")
    .select("users.username", "ratings.rating")
    .where("users.id", id);
}
