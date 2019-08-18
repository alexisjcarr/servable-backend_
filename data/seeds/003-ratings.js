exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ratings")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ratings").insert([
        { event_id: 1, user_id: 1, rating: 5 },
        { event_id: 2, user_id: 1, rating: 4 },
        { event_id: 3, user_id: 1, rating: 3 },
        { event_id: 1, user_id: 2, rating: 5 },
        { event_id: 2, user_id: 2, rating: 4 },
        { event_id: 3, user_id: 2, rating: 3 },
        { event_id: 1, user_id: 3, rating: 5 },
        { event_id: 2, user_id: 3, rating: 4 },
        { event_id: 3, user_id: 3, rating: 3 },
        { event_id: 5, user_id: 5, rating: 3 },
        { event_id: 4, user_id: 4, rating: 5 },
        { event_id: 2, user_id: 5, rating: 4 },
        { event_id: 6, user_id: 6, rating: 1 }
      ]);
    });
};
