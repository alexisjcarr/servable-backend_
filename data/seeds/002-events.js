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
        },
        {
          name: "The Little Event 1",
          owner_id: 2,
          location: "College Station",
          event_date: "2019-09-25",
          description: "This event is soooo litle!"
        },
        {
          name: "Community Grass Clipping Party",
          owner_id: 4,
          location: "College Station",
          event_date: "2019-08-21",
          description: "So much grass to cut, someone help!"
        },
        {
          name: "Pond Rebuild",
          owner_id: 3,
          location: "College Station",
          event_date: "2019-08-26",
          description: "Pond is falling down, can someone assist with its rebuild?"
        }
      ]);
    });
};
