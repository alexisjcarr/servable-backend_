exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("volunteers")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("volunteers").insert([
        { event_id: 1, user_id: 3 },
        { event_id: 2, user_id: 3 },
        { event_id: 3, user_id: 3 }
      ]);
    });
};
