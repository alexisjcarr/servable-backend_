exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("events")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("events").insert([
        {
          name: "The Big Event 1",
          owner_id: 1,
          location: "College Station",
          event_date: "2019-12-25",
          description: "This event is gonna be YUGEEEE!!!"
        },
        {
          name: "The Big Event 2",
          owner_id: 1,
          location: "College Station",
          event_date: "2019-12-25",
          description: "This event is gonna be YUGEEEE!!!"
        },
        {
          name: "The Big Event 3",
          owner_id: 1,
          location: "College Station",
          event_date: "2019-12-25",
          description: "This event is gonna be YUGEEEE!!!"
        }
      ]);
    });
};
