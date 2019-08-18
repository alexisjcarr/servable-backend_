exports.up = function(knex) {
  return knex.schema.createTable("ratings", tbl => {
    tbl.increments();
    tbl.integer("event_id");
    tbl
      .foreign("event_id")
      .references("id")
      .inTable("events");
    tbl.integer("user_id");
    tbl
      .foreign("user_id")
      .references("id")
      .inTable("users");
    tbl.integer("rating").unsigned();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ratings");
};
